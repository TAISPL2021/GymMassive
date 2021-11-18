import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Plan, UserPlan } from 'src/app/models/Plan';
import { PlanService } from 'src/app/services/plan.service';

@Component({
	selector: 'app-my-subscription',
	templateUrl: './my-subscription.component.html',
	styleUrls: [ './my-subscription.component.scss' ]
})
export class MySubscriptionComponent implements OnInit {
	loading: boolean;
	userPlan: UserPlan;
	constructor(
		public dialogRef: MatDialogRef<MySubscriptionComponent>,
		private planService: PlanService,
		private _snackBar: MatSnackBar
	) {}

	ngOnInit(): void {
		this.getPlan();
	}

	cancel() {
		this.planService.cancelPlan(sessionStorage.getItem('userId')).subscribe((res) => {
			this.openSnackBar('Suscripción Cancelada Satisfactoriamente');
			this.dialogRef.close();
		});
	}

	openSnackBar(message: string): void {
		this._snackBar.open(message, 'X', {
			horizontalPosition: 'end',
			verticalPosition: 'bottom'
		});
	}

	private getPlan() {
		this.loading = true;
		this.planService.getUserPlan(sessionStorage.getItem('userId')).subscribe((res) => {
			this.loading = false;
			if (res) {
				this.userPlan = res;
				var endDate = new Date(res.initialDate);
				endDate.setDate(endDate.getDate() + res.plan.days);
				this.userPlan.endDate = endDate;
			}
		});
	}
}
