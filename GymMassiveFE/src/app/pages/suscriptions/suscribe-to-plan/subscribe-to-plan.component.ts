import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Plan } from 'src/app/models/Plan';
import { ConfigurationService } from 'src/app/services';
import { PlanService } from 'src/app/services/plan.service';
import { MySubscriptionComponent } from '../my-subscription/my-subscription.component';

@Component({
	selector: 'app-subscribe-to-plan',
	templateUrl: './subscribe-to-plan.component.html',
	styleUrls: [ './subscribe-to-plan.component.scss' ]
})
export class SubscribeToPlanComponent implements OnInit {
	plans: Plan[] = [];
	enableEdit = true;

	constructor(
		private configService: ConfigurationService,
		public dialog: MatDialog,
		private planService: PlanService
	) {}

	ngOnInit(): void {
		this.enableEdit = this.configService.getConfigurationName('ManageSuscription').enabled;
		this.getPlans();
	}

	displaySuscription() {
		const dialogRef = this.dialog.open(MySubscriptionComponent, { minWidth: 750 });
	}

	private getPlans() {
		this.planService.getAllPlans().subscribe((res) => (this.plans = res));
	}
}
