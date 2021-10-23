import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Routine, User } from '../models';
import { Services } from './services.service';

@Injectable({
	providedIn: 'root'
})
export class UserService extends Services {
	private BASE_URL = environment.url + '/user';

	constructor(public _http: HttpClient) {
		super();
	}

	createEmployee(user: User): Observable<User> {
		return this._http.post<User>(this.BASE_URL + '/create', user, { headers: this.GetHttpHeaders() });
	}

	getEmployees(): Observable<User[]> {
		return this._http.get<User[]>(this.BASE_URL + '/findEmployees', { headers: this.GetHttpHeaders() });
	}
}
