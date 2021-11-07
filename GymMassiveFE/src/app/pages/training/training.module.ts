import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultRoutinesComponent } from './consult-routines/consult-routines.component';
import { TrainingRoutingModule } from './training-routing.module';

@NgModule({
	declarations: [ ConsultRoutinesComponent ],
	imports: [ CommonModule, TrainingRoutingModule ]
})
export class TrainingModule {}
