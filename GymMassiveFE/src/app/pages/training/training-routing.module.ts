import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsociateRoutineComponent } from './asociate-routine/asociate-routine.component';
import { ConsultRoutinesComponent } from './consult-routines/consult-routines.component';
import { RoutineTrackingComponent } from './routine-tracking/routine-tracking.component';

const routes: Routes = [
	{
		path: '',
		component: ConsultRoutinesComponent
	},
	{
		path: 'tracking',
		component: RoutineTrackingComponent
	},
	{
		path: 'asociate',
		component: AsociateRoutineComponent
	}
];
@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class TrainingRoutingModule {}
