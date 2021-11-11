import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { Routine, User } from 'src/app/models';
import { UpdateEmployeeComponent } from 'src/app/pages/employees/update-employee/update-employee.component';
import { RoutinesService } from 'src/app/services';
import { UserTrainingService } from 'src/app/services/userTraining.service';

@Component({
	selector: 'app-asociate-routine-modal',
	templateUrl: './asociate-routine-modal.component.html',
	styleUrls: [ './asociate-routine-modal.component.scss' ]
})
export class AsociateRoutineModalComponent implements OnInit {
	routines: Routine[];
	loading: boolean;
	formList = new FormArray([]);
	days = [ 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo' ];
	emptyRoutine: boolean = true;
	noAvailable: boolean;

	get formArrayLenght() {
		return (this.formList as FormArray).length;
	}

	constructor(
		private routinesService: RoutinesService,
		private userTrainingService: UserTrainingService,
		public dialogRef: MatDialogRef<UpdateEmployeeComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit(): void {
		this.getRoutines();
		this.addEmptyFormGroup();
	}

	addFormGroup(formGroup: FormGroup): void {
		this.formList.push(formGroup);
	}

	addEmptyFormGroup(): void {
		this.addFormGroup(
			new FormGroup({
				day: new FormControl(),
				exercises: new FormArray([])
			})
		);
	}

	updateRoutine(): void {
		if (this.formList.valid && !this.noAvailable) {
			const userTraining = this.createRequest();
			this.dialogRef.close(userTraining);
		}
	}

	removeGroup(i: number): void {
		this.formList.removeAt(i);
	}

	private createRequest() {
		let training = [];
		const userId = this.data.client;
		this.formList.controls.forEach((c) => {
			const { day, exercises } = c.value;
			const exercisesMaped = exercises.map((x) => {
				return {
					day: day,
					training: x.routine,
					sets: x.sets,
					reps: x.reps
				};
			});
			training = [ ...training, ...exercisesMaped ];
		});

		return {
			userId,
			training
		};
	}

	private getRoutines(): void {
		this.loading = true;
		forkJoin([
			this.routinesService.getAllRoutines(),
			this.userTrainingService.getUserRoutine(this.data.client)
		]).subscribe(
			(res) => {
				this.routines = res[0].sort((a, b) => {
					if (a.group < b.group) {
						return -1;
					}
					if (a.group > b.group) {
						return 1;
					}
					return 0;
				});
				this.loading = false;
				const routine = res[1];
				if (routine) {
					this.formList.removeAt(0);
					this.days.forEach((day) => {
						const dayRoutine = routine.filter((x) => x.day === day).map((y) => {
							return new FormGroup({
								routine: new FormControl(y.training.id),
								sets: new FormControl(y.sets),
								reps: new FormControl(y.reps)
							});
						});
						if (dayRoutine.length) {
							this.emptyRoutine = false;
							this.formList.push(
								new FormGroup({
									day: new FormControl(day),
									exercises: new FormArray(dayRoutine)
								})
							);
						}
					});
				}
			},
			(error) => {
				this.loading = false;
				this.noAvailable = true;
			}
		);
	}
}
