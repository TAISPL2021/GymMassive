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
		return this._http.get<Routine[]>(environment.url + '/routine', { headers: this.GetHttpHeaders() });
	}

	createRoutine(body: Routine): Observable<Routine> {
		return this._http.post<Routine>(environment.url + '/routine', body, { headers: this.GetHttpHeaders() });
	}

	updateRoutine(body: Routine): Observable<Routine> {
		return this._http.put<Routine>(environment.url + '/routine', body, { headers: this.GetHttpHeaders() });
	}

	removeRoutine(id: string): Observable<boolean> {
		return this._http.delete<boolean>(environment.url + '/routine/' + id, { headers: this.GetHttpHeaders() });
	}
}
