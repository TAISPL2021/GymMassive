import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Routine } from 'src/app/models';

@Component({
	selector: 'app-routine-card',
	templateUrl: './routine-card.component.html',
	styleUrls: [ './routine-card.component.scss' ]
})
export class RoutineCardComponent {
	@Input() routine: Routine | undefined;
	@Input() sets: number | undefined;
	@Input() reps: number | undefined;
}
