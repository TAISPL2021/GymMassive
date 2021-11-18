import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Plan } from 'src/app/models/Plan';
import { PlanSuscriptionRequest } from 'src/app/models/PlanSuscription';
import { PlanService } from 'src/app/services/plan.service';

@Component({
	selector: 'app-plan-card',
	templateUrl: './plan-card.component.html',
	styleUrls: [ './plan-card.component.scss' ]
})
export class PlanCardComponent implements OnInit {
	@Input() plan: Plan;
	img = {
		Mensualidad: '../../../../../assets/monthPlan.jpeg',
		Año: '../../../../../assets/yearPlan.jpeg',
		Cuatrimestre: '../../../../../assets/quarter.jpg'
	};

	constructor(private planService: PlanService, private _snackBar: MatSnackBar) {}

	ngOnInit(): void {}

	suscribe() {
		const request: PlanSuscriptionRequest = {
			planId: this.plan.id,
			userEmail: sessionStorage.getItem('email'),
			userId: sessionStorage.getItem('userId')
		};
		this.planService.asociatePlan(request).subscribe((res) => {
			this.openSnackBar(`La suscripcion al plan ${this.plan.name.toLocaleLowerCase()} ha sido exitosa!`);
		});
	}

	openSnackBar(message: string): void {
		this._snackBar.open(message, 'X', {
			horizontalPosition: 'end',
			verticalPosition: 'bottom'
		});
	}
}
