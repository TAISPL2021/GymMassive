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
import { MatTableModule } from '@angular/material/table';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeTableComponent } from './employee-list/employee-table/employee-table.component';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
	declarations: [ EmployeeListComponent, EmployeeTableComponent, CreateEmployeeComponent ],
	imports: [
		CommonModule,
		EmployeeRoutingModule,
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
		MatSelectModule,
		MatTableModule,
		ReactiveFormsModule,
	]
})
export class EmployeesModule {}
