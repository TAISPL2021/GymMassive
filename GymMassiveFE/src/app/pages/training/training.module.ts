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
import { RoutineTrackingComponent } from './routine-tracking/routine-tracking.component';
import { AsociateRoutineComponent } from './asociate-routine/asociate-routine.component';
import { ClientListComponent } from './asociate-routine/client-list/client-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { AsociateRoutineModalComponent } from './asociate-routine/asociate-routine-modal/asociate-routine-modal.component';
import { RoutineDayComponent } from './asociate-routine/asociate-routine-modal/routine-day/routine-day.component';

@NgModule({
	declarations: [ ConsultRoutinesComponent, RoutineCardComponent, RoutineTrackingComponent, AsociateRoutineComponent, ClientListComponent, AsociateRoutineModalComponent, RoutineDayComponent ],
	imports: [
		MatButtonModule,
		MatDatepickerModule,
		MatDialogModule,
		MatGridListModule,
		MatPaginatorModule,
		MatSnackBarModule,
		MatSelectModule,
		MatTableModule,
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
