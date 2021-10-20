import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Routine } from '../models';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
		Accept: 'application/json'
	})
};

@Injectable()
export class RoutinesService {
	constructor(public _http: HttpClient) {}

	getAllRoutines(): Observable<Routine[]> {
		return this._http.get<Routine[]>(environment.url + '/routine', httpOptions);
	}
}
