import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribeToPlanComponent } from './suscribe-to-plan/subscribe-to-plan.component';

const routes: Routes = [
	{
		path: '',
		component: SubscribeToPlanComponent
	}
];
@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class SubscriptionsRoutingModule {}
