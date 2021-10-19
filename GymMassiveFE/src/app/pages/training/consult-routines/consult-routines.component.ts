import { Component, OnInit } from '@angular/core';
import { RoutinesService } from 'src/app/services';

@Component({
	selector: 'app-consult-routines',
	templateUrl: './consult-routines.component.html',
	styleUrls: [ './consult-routines.component.scss' ]
})
export class ConsultRoutinesComponent implements OnInit {
	constructor(private routinesService: RoutinesService) {}

	ngOnInit(): void {
		this.routinesService.getAllRoutines().subscribe((res) => {
			console.log(res);
		});
	}
}
