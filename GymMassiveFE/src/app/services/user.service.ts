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

	updateEmployee(user: User): Observable<User> {
		return this._http.put<User>(this.BASE_URL + '/edit', user, { headers: this.GetHttpHeaders() });
	}

	deleteEmployee(id: string): Observable<boolean> {
		return this._http.delete<boolean>(this.BASE_URL + '/delete', {
			params: { userId: id },
			headers: this.GetHttpHeaders()
		});
	}

	getEmployees(): Observable<User[]> {
		return this._http.get<User[]>(this.BASE_URL + '/findEmployees', { headers: this.GetHttpHeaders() });
	}

	getClients(): Observable<User[]> {
		return this._http.get<User[]>(this.BASE_URL + '/findClients', { headers: this.GetHttpHeaders() });
	}
}
