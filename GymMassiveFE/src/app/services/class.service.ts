import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookingRequest } from '../models/BookingRequest';
import { Class, UserClass } from '../models/Class';
import { Services } from './services.service';

@Injectable({
	providedIn: 'root'
})
export class ClassService extends Services {
	constructor(public _http: HttpClient) {
		super();
	}

	getAllClass(): Observable<Class[]> {
		return this._http.get<Class[]>(environment.url + '/class', { headers: this.GetHttpHeaders() });
	}

	getAllClassUser(id: string): Observable<UserClass[]> {
		return this._http.get<UserClass[]>(environment.url + '/class/' + id, { headers: this.GetHttpHeaders() });
	}

	actionService(body: BookingRequest): Observable<boolean> {
		return this._http.post<boolean>(environment.url + '/class', body, { headers: this.GetHttpHeaders() });
	}
}
