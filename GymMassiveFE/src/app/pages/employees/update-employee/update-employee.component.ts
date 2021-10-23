import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';

@Component({
	selector: 'app-update-employee',
	templateUrl: './update-employee.component.html',
	styleUrls: [ './update-employee.component.scss' ]
})
export class UpdateEmployeeComponent implements OnInit {
	hide = true;
	formGroup = new FormGroup({
		id: new FormControl(null, Validators.required),
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
	constructor(public dialogRef: MatDialogRef<UpdateEmployeeComponent>, @Inject(MAT_DIALOG_DATA) public data: User) {}

	ngOnInit(): void {
		this.formGroup.patchValue({
			id: this.data.id,
			name: this.data.name,
			last_name: this.data.lastName,
			birthday: this.data.birthday,
			document_type: this.data.documentType,
			document_number: this.data.documentNumber,
			phone_number: this.data.phone,
			email: this.data.email,
			password: this.data.password,
			employee_type: this.data.type
		});
	}

	updateEmployee() {
		if (this.formGroup.valid) {
			const user = this.createRequest();
			this.dialogRef.close(user);
		}
	}

	private createRequest(): User {
		const {
			id,
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
			id,
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
