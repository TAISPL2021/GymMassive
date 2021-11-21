import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BookClassComponent } from './book-class/book-class.component';
import { ClassTableComponent } from './book-class/class-table/class-table.component';
import { BookingRoutingModule } from './booking-routing.module';
import { MyReservationsComponent } from './book-class/my-reservations/my-reservations.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { ManageClassTableComponent } from './manage-bookings/manage-class-table/manage-class-table.component';
import { CreateClassComponent } from './manage-bookings/create-class/create-class.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';

@NgModule({
	declarations: [
		BookClassComponent,
		ClassTableComponent,
		MyReservationsComponent,
		ManageBookingsComponent,
		ManageClassTableComponent,
		CreateClassComponent
	],
	imports: [
		CommonModule,
		BookingRoutingModule,
		MatButtonModule,
		MatCardModule,
		MatDatepickerModule,
		MatDialogModule,
		MatFormFieldModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatInputModule,
		MatPaginatorModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatSelectModule,
		MatTableModule,
		NgxMatDatetimePickerModule,
		NgxMatTimepickerModule,
		MatDatepickerModule,
		MatNativeDateModule,
		ReactiveFormsModule,
		NgxMatMomentModule 
	],
	providers: [ MatDatepickerModule ]
})
export class BookingsModule {}
