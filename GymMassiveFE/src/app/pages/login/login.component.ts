import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/models';
import { LoginService } from '../../services';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ],
	providers: [ LoginService ]
})
export class LoginComponent {
	formGroup = new FormGroup({
		email: new FormControl(null, Validators.required),
		password: new FormControl(null, Validators.required)
	});

	constructor(private loginService: LoginService, private router: Router) {}

	login(): void {
		if (this.formGroup.valid) {
			const { email, password } = this.formGroup.getRawValue();
			this.loginService.login(email, password).subscribe(
				(result) => {
					let loginResponse: LoginResponse = result;
					sessionStorage.setItem('email', loginResponse.email);
					sessionStorage.setItem('token', loginResponse.token);
					sessionStorage.setItem('refreshToken', loginResponse.refreshToken);
					this.router.navigate([ 'home' ]);
				},
				(error) => {
					console.log(error);
				}
			);
		}
	}
}
