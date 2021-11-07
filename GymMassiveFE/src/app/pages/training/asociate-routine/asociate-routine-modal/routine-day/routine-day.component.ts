import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Routine } from 'src/app/models';

@Component({
	selector: 'app-routine-day',
	templateUrl: './routine-day.component.html',
	styleUrls: [ './routine-day.component.scss' ]
})
export class RoutineDayComponent implements OnInit {
	days = [ 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo' ];
	@Input() formGroup;

	get exercises(): FormArray {
		return this.formGroup.get('exercises') as FormArray;
	}

	get exercisesLength(): number {
		return (this.formGroup.get('exercises') as FormArray).length;
	}

	@Input() emptyRoutine: boolean;
	@Input() routines: Routine[];

	constructor() {}

	ngOnInit(): void {
		if (this.emptyRoutine) {
			this.addEmptyExercise();
		}
	}

	addEmptyExercise(): void {
		this.exercises.push(this.createEmptyExercise());
	}

	removeExercise(index): void {
		this.exercises.removeAt(index);
	}

	private createEmptyExercise(): FormGroup {
		return new FormGroup({
			routine: new FormControl(),
			sets: new FormControl(),
			reps: new FormControl()
		});
	}
}
