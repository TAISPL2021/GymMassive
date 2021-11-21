import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookClassComponent } from './book-class/book-class.component';

const routes: Routes = [
	{
		path: '',
		component: BookClassComponent
	}
];
@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class BookingRoutingModule {}
