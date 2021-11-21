import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BookingRequest } from 'src/app/models/BookingRequest';

@Component({
	selector: 'app-create-class',
	templateUrl: './create-class.component.html',
	styleUrls: [ './create-class.component.scss' ]
})
export class CreateClassComponent {

	minDate= new Date();

	formGroup = new FormGroup({
		name: new FormControl(null, Validators.required),
		date: new FormControl(null, Validators.required),
		capacity: new FormControl(null, Validators.required)
	});
	constructor(public dialogRef: MatDialogRef<CreateClassComponent>) {}

	createClase() {
		if (this.formGroup.valid) {
			const routine = this.createRequest();
			console.log(routine);
			this.dialogRef.close(routine);
		}
	}

	private createRequest(): BookingRequest {
		const { name, date, capacity } = this.formGroup.getRawValue();
		const dateTime = new Date(date.utcOffset('-4').format('YYYY-MM-DD HH:mm'));
		const action: BookingRequest = {
			action: 'Create',
			clas: {
				name,
				date: dateTime,
				capacity
			},
			userId: sessionStorage.getItem('userId'),
			userEmail: sessionStorage.getItem('email')
		};

		return action;
	}
}
