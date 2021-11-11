import { Component, OnInit } from '@angular/core';
import { Routine } from 'src/app/models';
import { UserTrainingService } from 'src/app/services/userTraining.service';

@Component({
	selector: 'app-routine-tracking',
	templateUrl: './routine-tracking.component.html',
	styleUrls: [ './routine-tracking.component.scss' ]
})
export class RoutineTrackingComponent implements OnInit {
	userId: string;
	loading: boolean;
	routines: Routine[] = [];
	noAvailable: boolean;
	constructor(private userTrainingService: UserTrainingService) {}
	get dayRoutineKeys() {
		return Object.keys(this.dayRoutine);
	}
	dayRoutine = {
		Lunes: [],
		Martes: [],
		Miercoles: [],
		Jueves: [],
		Viernes: [],
		Sabado: [],
		Domingo: []
	};

	ngOnInit(): void {
		this.initUserRoutines();
	}

	private initUserRoutines() {
		this.loading = true;
		this.userId = sessionStorage.getItem('userId');
		this.userTrainingService.getUserRoutine(this.userId).subscribe(
			(res) => {
				this.loading = false;
				Object.keys(this.dayRoutine).forEach((d) => {
					this.dayRoutine[d] = res.filter((y) => y.day === d);
				});
				this.routines = Object.assign([], res);
			},
			(error) => {
				this.noAvailable = true;
				this.loading = false;
			}
		);
	}
}
