import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Routine } from '../models';
import { Services } from './services.service';

@Injectable({
	providedIn: 'root'
})
export class RoutinesService extends Services {

	constructor(public _http: HttpClient) {
		super();
	}

	getAllRoutines(): Observable<Routine[]> {
		return this._http.get<Routine[]>(environment.url + '/routine', { withCredentials: true, headers: this.GetHttpHeaders() });
	}
}
