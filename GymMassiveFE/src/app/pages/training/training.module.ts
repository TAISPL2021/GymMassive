import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultRoutinesComponent } from './consult-routines/consult-routines.component';
import { TrainingRoutingModule } from './training-routing.module';
import { RoutinesService } from 'src/app/services';
import { HttpClientModule } from '@angular/common/http';
import { RoutineCardComponent } from './consult-routines/routine-card/routine-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [ ConsultRoutinesComponent, RoutineCardComponent ],
	imports: [
		MatCardModule,
		ReactiveFormsModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
		CommonModule,
		TrainingRoutingModule,
		HttpClientModule
	],
	providers: [ RoutinesService ]
})
export class TrainingModule {}
