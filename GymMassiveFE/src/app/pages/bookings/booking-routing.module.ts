import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookClassComponent } from './book-class/book-class.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';

const routes: Routes = [
	{
		path: '',
		component: BookClassComponent
	},
	{
		path: 'manage',
		component: ManageBookingsComponent
	}
];
@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class BookingRoutingModule {}
