import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeToPlanComponent } from './suscribe-to-plan/subscribe-to-plan.component';
import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
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
import { ShareModule } from 'src/app/share/share.module';
import { PlanCardComponent } from './suscribe-to-plan/plan-card/plan-card.component';
import { MySubscriptionComponent } from './my-subscription/my-subscription.component';

@NgModule({
	declarations: [ SubscribeToPlanComponent, PlanCardComponent, MySubscriptionComponent ],
	imports: [
		CommonModule,
		MatMenuModule,
		MatButtonModule,
		MatDatepickerModule,
		MatDialogModule,
		MatGridListModule,
		MatPaginatorModule,
		MatSnackBarModule,
		MatSelectModule,
		MatTableModule,
		MatCardModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatProgressSpinnerModule,
		ReactiveFormsModule,
		ShareModule,
		SubscriptionsRoutingModule
	]
})
export class SubscriptionsModule {}
