import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent implements OnInit {
	hide = true;
	formGroup = new FormGroup({
		name: new FormControl(null, Validators.required),
		last_name: new FormControl(null, Validators.required),
		birthday: new FormControl(null, Validators.required),
		document_type: new FormControl(null, Validators.required),
		document_number: new FormControl(null, Validators.required),
		phone_number: new FormControl(null, Validators.required),
		email: new FormControl(null, [ Validators.required, Validators.email ]),
		password: new FormControl(null, Validators.required)
	});
	constructor() {}

	ngOnInit(): void {}

	submit() {
	}
}
