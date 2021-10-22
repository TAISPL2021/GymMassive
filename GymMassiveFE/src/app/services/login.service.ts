import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginRequest } from '../models/LoginRequest';
import { LoginResponse } from 'src/app/models';
import { Services } from './services.service';

@Injectable()
export class LoginService extends Services {

	constructor(public _http: HttpClient) {
		super()
	}

	login(email: string, password: string): Observable<any> {
		var loginRequest: LoginRequest = { email, password };
		return this._http.post<any>(environment.url + '/auth/login', loginRequest, { headers: this.GetHttpHeaders() });
	}
}
