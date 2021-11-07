import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultRoutinesComponent } from './consult-routines/consult-routines.component';

const routes: Routes = [
	{
		path: '',
		component: ConsultRoutinesComponent
	}
];
@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class TrainingRoutingModule {}
