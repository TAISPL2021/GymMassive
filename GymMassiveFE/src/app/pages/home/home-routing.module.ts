import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'training',
				loadChildren: () => import('../training/training.module').then((m) => m.TrainingModule)
			},
			{
				path: 'employees',
				loadChildren: () => import('../employees/employees.module').then((m) => m.EmployeesModule)
			},
			{
				path: 'suscription',
				loadChildren: () => import('../suscriptions/subscriptions.module').then((m) => m.SubscriptionsModule)
			},
			{
				path: 'booking',
				loadChildren: () => import('../bookings/bookings.module').then((m) => m.BookingsModule)
			}
		]
	}
];
@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class HomeRoutingModule {}
