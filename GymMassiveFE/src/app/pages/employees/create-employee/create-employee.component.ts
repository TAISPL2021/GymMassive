import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models';

@Component({
	selector: 'app-create-employee',
	templateUrl: './create-employee.component.html',
	styleUrls: [ './create-employee.component.scss' ]
})
export class CreateEmployeeComponent implements OnInit {
	hide = true;
	formGroup = new FormGroup({
		name: new FormControl(null, Validators.required),
		last_name: new FormControl(null, Validators.required),
		birthday: new FormControl(null, Validators.required),
		document_type: new FormControl(null, Validators.required),
		document_number: new FormControl(null, Validators.required),
		phone_number: new FormControl(null, Validators.required),
		email: new FormControl(null, [ Validators.required, Validators.email ]),
		password: new FormControl(null, Validators.required),
		employee_type: new FormControl(null, Validators.required)
	});
	constructor(public dialogRef: MatDialogRef<CreateEmployeeComponent>) {}

	ngOnInit(): void {}

	createEmployee() {
		if (this.formGroup.valid) {
			const user = this.createRequest();
			this.dialogRef.close(user);
		}
	}

	private createRequest(): User {
		const {
			name,
			last_name,
			birthday,
			document_type,
			document_number,
			phone_number,
			email,
			password,
			employee_type
		} = this.formGroup.getRawValue();
		return {
			name,
			lastName: last_name,
			birthday,
			documentType: document_type,
			documentNumber: document_number,
			phone: phone_number,
			email,
			password,
			type: employee_type
		};
	}
}
