import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RoutinesService } from 'src/app/services';
import { ConsultRoutinesComponent } from './consult-routines/consult-routines.component';
import { RoutineCardComponent } from './consult-routines/routine-card/routine-card.component';
import { TrainingRoutingModule } from './training-routing.module';

@NgModule({
	declarations: [ ConsultRoutinesComponent, RoutineCardComponent ],
	imports: [
		CommonModule,
		MatCardModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatProgressSpinnerModule,
		ReactiveFormsModule,
		TrainingRoutingModule
	],
	providers: [ RoutinesService ]
})
export class TrainingModule {}
