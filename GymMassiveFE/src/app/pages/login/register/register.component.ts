import { TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserType } from 'src/app/models';
import { UserService } from 'src/app/services';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.scss' ],
	providers: [ TitleCasePipe ]
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
	constructor(private userService: UserService, private tcp: TitleCasePipe, private router: Router) {}

	ngOnInit(): void {}

	submit() {
		if (this.formGroup.valid) {
			const user = this.generateRequest();
			this.userService.createEmployee(user).subscribe(
				(res) => {
					this.router.navigate([ '/login' ]);
				},
				(error) => {}
			);
		}
	}

	private generateRequest(): User {
		const {
			name,
			last_name,
			birthday,
			document_type,
			document_number,
			phone_number,
			email,
			password
		} = this.formGroup.getRawValue();

		return {
			name: this.tcp.transform(name.toLowerCase()),
			lastName: this.tcp.transform(last_name.toLowerCase()),
			birthday: birthday.toISOString(),
			documentType: document_type,
			documentNumber: document_number,
			phone: phone_number,
			email: email.toLowerCase(),
			password: password,
			type: UserType.CLIENTE
		};
	}
}
