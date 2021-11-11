import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Routine } from 'src/app/models';
import { RoutinesService } from 'src/app/services';
import { UpdateRoutineComponent } from '../../update-routine/update-routine.component';

@Component({
	selector: 'app-routine-card',
	templateUrl: './routine-card.component.html',
	styleUrls: [ './routine-card.component.scss' ]
})
export class RoutineCardComponent {
	@Input() actionButton: boolean = true;
	@Input() routine: Routine | undefined;
	@Input() sets: number | undefined;
	@Input() reps: number | undefined;
	@Output() reloadRoutines = new EventEmitter();

	constructor(private _snackBar: MatSnackBar, public dialog: MatDialog, private routinesService: RoutinesService) {}

	updateRoutine(): void {
		const dialogRef = this.dialog.open(UpdateRoutineComponent, { data: { ...this.routine } });

		dialogRef.afterClosed().subscribe((result) => {
			this.routinesService.updateRoutine(result).subscribe(
				(res) => {
					this.reloadRoutines.emit(Object.assign({}, true));
					this.openSnackBar('Ejercicio Actualizado Satisfactoriamente');
				},
				(error) => {}
			);
		});
	}

	removeRoutine(): void {
		this.routinesService.removeRoutine(this.routine.id).subscribe(
			(res) => {
				this.reloadRoutines.emit(Object.assign({}, true));
				this.openSnackBar('Ejercicio Eliminado Satisfactoriamente');
			},
			(error) => {}
		);
	}

	openSnackBar(message: string): void {
		this._snackBar.open(message, 'X', {
			horizontalPosition: 'end',
			verticalPosition: 'bottom'
		});
	}
}
