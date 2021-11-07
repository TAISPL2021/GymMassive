import { Component, OnInit } from '@angular/core';
import { UserTrainingService } from 'src/app/services/userTraining.service';

@Component({
	selector: 'app-routine-tracking',
	templateUrl: './routine-tracking.component.html',
	styleUrls: [ './routine-tracking.component.scss' ]
})
export class RoutineTrackingComponent implements OnInit {
	userId: string;
	constructor(private userTrainingService: UserTrainingService) {}

	ngOnInit(): void {
		this.userId = sessionStorage.getItem('userId');
		this.userTrainingService.getUserRoutine(this.userId).subscribe((res) => {
			console.log(res);
		});
	}
}
