import { Component, OnInit } from '@angular/core';
import { Plan } from 'src/app/models/Plan';
import { PlanService } from 'src/app/services/plan.service';

@Component({
	selector: 'app-suscribe-to-plan',
	templateUrl: './suscribe-to-plan.component.html',
	styleUrls: [ './suscribe-to-plan.component.scss' ]
})
export class SuscribeToPlanComponent implements OnInit {
	plans: Plan[];

	constructor(private planService: PlanService) {}

	ngOnInit(): void {
		this.getPlans();
	}

	private getPlans() {
		this.planService.getAllPlans().subscribe((res) => (this.plans = res));
	}
}
