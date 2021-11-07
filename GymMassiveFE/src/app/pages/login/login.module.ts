import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register/register.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [LoginComponent, RegisterComponent],
	imports: [
		CommonModule,
		MatIconModule,
		ReactiveFormsModule,
		MatSelectModule,
		MatDatepickerModule,
		MatGridListModule,
		MatInputModule,
		MatButtonModule,
		LoginRoutingModule,
		MatCardModule,
		FormsModule,
	]
})
export class LoginModule { }
