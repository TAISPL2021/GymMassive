import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Routine } from '../models';
import { Plan, UserPlan } from '../models/Plan';
import { PlanSuscriptionRequest } from '../models/PlanSuscription';
import { Services } from './services.service';

@Injectable({
	providedIn: 'root'
})
export class PlanService extends Services {
	constructor(public _http: HttpClient) {
		super();
	}

	getAllPlans(): Observable<Plan[]> {
		return this._http.get<Plan[]>(environment.url + '/plans', { headers: this.GetHttpHeaders() });
	}

	getUserPlan(userId: string): Observable<UserPlan> {
		return this._http.get<UserPlan>(environment.url + '/suscribe/' + userId, { headers: this.GetHttpHeaders() });
	}

	asociatePlan(planRequest: PlanSuscriptionRequest) {
		return this._http.post<Plan>(environment.url + '/suscribe', planRequest, { headers: this.GetHttpHeaders() });
	}

	cancelPlan(userId: string) {
		return this._http.delete<boolean>(environment.url + '/suscribe/' + userId, { headers: this.GetHttpHeaders() });
	}
}
