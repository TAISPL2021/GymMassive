import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Routine } from 'src/app/models';

@Component({
	selector: 'app-update-routine',
	templateUrl: './update-routine.component.html',
	styleUrls: [ './update-routine.component.scss' ]
})
export class UpdateRoutineComponent implements OnInit {
	formGroup = new FormGroup({
		id: new FormControl(null),
		name: new FormControl(null, Validators.required),
		group: new FormControl(null, Validators.required),
		sets: new FormControl(null, Validators.required),
		reps: new FormControl(null, Validators.required),
		image: new FormControl(null, Validators.required)
	});
	displayImageError: boolean;
	constructor(
		public dialogRef: MatDialogRef<UpdateRoutineComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Routine
	) {}

	ngOnInit(): void {
		this.formGroup.patchValue({
			id: this.data.id,
			name: this.data.exercise,
			group: this.data.group,
			sets: this.data.sets,
			reps: this.data.reps,
			image: this.data.image
		});
	}

	udateRoutine() {
		if (this.formGroup.valid) {
			const routine = this.request();
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

	private request(): Routine {
		const { id, name, group, sets, reps, image } = this.formGroup.getRawValue();
		return {
			id,
			exercise: name,
			sets,
			reps,
			group,
			image
		};
	}
}
