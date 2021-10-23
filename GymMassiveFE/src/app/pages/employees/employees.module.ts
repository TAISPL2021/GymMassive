import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeTableComponent } from './employee-list/employee-table/employee-table.component';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
	declarations: [ EmployeeListComponent, EmployeeTableComponent ],
	imports: [
		CommonModule,
		MatTableModule,
		MatCardModule,
		MatButtonModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatProgressSpinnerModule,
		ReactiveFormsModule,
		MatPaginatorModule,
		EmployeeRoutingModule
	]
})
export class EmployeesModule {}
