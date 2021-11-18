import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuscribeToPlanComponent } from './suscribe-to-plan/suscribe-to-plan.component';

const routes: Routes = [
	{
		path: '',
		component: SuscribeToPlanComponent
	}
];
@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class SuscriptionRoutingModule {}
