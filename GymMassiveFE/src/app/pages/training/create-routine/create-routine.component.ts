import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Routine } from 'src/app/models';
import { CreateEmployeeComponent } from '../../employees/create-employee/create-employee.component';

@Component({
	selector: 'app-create-routine',
	templateUrl: './create-routine.component.html',
	styleUrls: [ './create-routine.component.scss' ]
})
export class CreateRoutineComponent {
	formGroup = new FormGroup({
		name: new FormControl(null, Validators.required),
		group: new FormControl(null, Validators.required),
		sets: new FormControl(null, Validators.required),
		reps: new FormControl(null, Validators.required),
		image: new FormControl(null, Validators.required)
	});
	displayImageError: boolean;
	constructor(public dialogRef: MatDialogRef<CreateEmployeeComponent>) {}

	createRoutine() {
		if (this.formGroup.valid) {
			const routine = this.createRequest();
			this.dialogRef.close(routine);
		} else {
			const { image } = this.formGroup.getRawValue();
			this.displayImageError = image === null;
		}
	}

	setImage(image: string): void {
		this.formGroup.controls.image.setValue(image);
		console.log(this.formGroup.getRawValue());
	}

	private createRequest(): Routine {
		const { name, group, sets, reps, image } = this.formGroup.getRawValue();
		return {
			exercise: name,
			sets,
			reps,
			group,
			image
		};
	}
}
