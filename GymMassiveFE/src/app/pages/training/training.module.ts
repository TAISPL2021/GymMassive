import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultRoutinesComponent } from './consult-routines/consult-routines.component';
import { TrainingRoutingModule } from './training-routing.module';
import { RoutinesService } from 'src/app/services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [ ConsultRoutinesComponent ],
	imports: [ CommonModule, TrainingRoutingModule, HttpClientModule ],
	providers: [ RoutinesService ]
})
export class TrainingModule {}
