import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TrainingModified, UserTraning } from '../models';
import { Services } from './services.service';

@Injectable({
	providedIn: 'root'
})
export class UserTrainingService extends Services {
	private BASE_URL = environment.url + '/userTraining';

	constructor(public _http: HttpClient) {
		super();
	}

	getUserRoutine(userId: string): Observable<TrainingModified[]> {
		return this._http.get<TrainingModified[]>(this.BASE_URL + '/' + userId, { headers: this.GetHttpHeaders() });
	}

	asociateUserTraining(body): Observable<UserTraning> {
		return this._http.post<UserTraning>(this.BASE_URL, body, { headers: this.GetHttpHeaders() });
	}
}
