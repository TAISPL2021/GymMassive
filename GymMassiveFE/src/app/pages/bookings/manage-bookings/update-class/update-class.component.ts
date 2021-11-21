import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { Routine } from 'src/app/models';
import { BookingRequest } from 'src/app/models/BookingRequest';
import { Class } from 'src/app/models/Class';
import { CreateClassComponent } from '../create-class/create-class.component';

@Component({
	selector: 'app-update-class',
	templateUrl: './update-class.component.html',
	styleUrls: [ './update-class.component.scss' ]
})
export class UpdateClassComponent implements OnInit {
	minDate = new Date();

	formGroup = new FormGroup({
		id: new FormControl(null, Validators.required),
		name: new FormControl(null, Validators.required),
		date: new FormControl(null, Validators.required),
		capacity: new FormControl(null, Validators.required)
	});

	constructor(public dialogRef: MatDialogRef<CreateClassComponent>, @Inject(MAT_DIALOG_DATA) public data: Class) {}

	ngOnInit(): void {
		this.formGroup.patchValue({
			id: this.data.id,
			name: this.data.name,
			date: moment(new Date(this.data.date)),
			capacity: this.data.capacity
		});
	}

	createClase() {
		if (this.formGroup.valid) {
			const routine = this.createRequest();
			console.log(routine);
			this.dialogRef.close(routine);
		}
	}

	private createRequest(): BookingRequest {
		const { id, name, date, capacity } = this.formGroup.getRawValue();
		const dateTime = new Date(date.utcOffset('-4').format('YYYY-MM-DD HH:mm'));
		const action: BookingRequest = {
			action: 'Update',
			clas: {
				id,
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
