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
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { RoutinesService } from 'src/app/services';
import { AsociateRoutineModalComponent } from './asociate-routine/asociate-routine-modal/asociate-routine-modal.component';
import { RoutineDayComponent } from './asociate-routine/asociate-routine-modal/routine-day/routine-day.component';
import { AsociateRoutineComponent } from './asociate-routine/asociate-routine.component';
import { ClientListComponent } from './asociate-routine/client-list/client-list.component';
import { ConsultRoutinesComponent } from './consult-routines/consult-routines.component';
import { RoutineCardComponent } from './consult-routines/routine-card/routine-card.component';
import { RoutineTrackingComponent } from './routine-tracking/routine-tracking.component';
import { TrainingRoutingModule } from './training-routing.module';
import { CreateRoutineComponent } from './create-routine/create-routine.component';
import { ShareModule } from 'src/app/share/share.module';

@NgModule({
	declarations: [
		ConsultRoutinesComponent,
		RoutineCardComponent,
		RoutineTrackingComponent,
		AsociateRoutineComponent,
		ClientListComponent,
		AsociateRoutineModalComponent,
		RoutineDayComponent,
		CreateRoutineComponent
	],
	imports: [
		MatMenuModule,
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
		ShareModule,
		TrainingRoutingModule
	],
	providers: [ RoutinesService ]
})
export class TrainingModule {}
