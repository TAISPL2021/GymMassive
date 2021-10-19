import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoginRequest } from '../models/LoginRequest';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
		Accept: 'application/json'
	})
};

@Injectable()
export class LoginService {
	constructor(public _http: HttpClient) {}

	login(email: string, password: string) {
		var loginRequest: LoginRequest = { email, password };
		return this._http.post<any>(environment.url + '/auth/login', loginRequest, httpOptions);
	}
}
