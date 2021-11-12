import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ConfigurationService, RoutinesService } from 'src/app/services';
import { CreateRoutineComponent } from '../create-routine/create-routine.component';

@Component({
	selector: 'app-consult-routines',
	templateUrl: './consult-routines.component.html',
	styleUrls: [ './consult-routines.component.scss' ]
})
export class ConsultRoutinesComponent implements OnInit, OnDestroy {
	loading = true;
	routines: any[] = [];
	searchControl = new FormControl();
	enableEdit = true;

	private originalRoutines: any[] = [];
	private componentDestroyed$ = new Subject();

	constructor(
		private _snackBar: MatSnackBar,
		private configService: ConfigurationService,
		public dialog: MatDialog,
		private routinesService: RoutinesService
	) {}

	ngOnInit(): void {
		this.enableEdit = this.configService.getConfigurationName('CreateRoutines').enabled;
		this.getRoutines();
		this.listenSearch();
	}

	ngOnDestroy(): void {
		this.componentDestroyed$.next();
		this.componentDestroyed$.complete();
	}

	createRoutine(): void {
		const dialogRef = this.dialog.open(CreateRoutineComponent);
		dialogRef.afterClosed().subscribe((result) => {
			this.routinesService.createRoutine(result).subscribe(
				(res) => {
					this.getRoutines();
					this.openSnackBar('Ejercicio Creado Satisfactoriamente');
				},
				(error) => {}
			);
		});
	}

	openSnackBar(message: string): void {
		this._snackBar.open(message, 'X', {
			horizontalPosition: 'end',
			verticalPosition: 'bottom'
		});
	}

	getRoutines() {
		this.loading = true;
		this.routinesService.getAllRoutines().subscribe((res) => {
			this.routines = res;
			this.originalRoutines = Object.assign([], res);
			this.loading = false;
		});
	}

	private listenSearch() {
		this.searchControl.valueChanges.pipe(debounceTime(500), takeUntil(this.componentDestroyed$)).subscribe((c) => {
			this.routines = this.originalRoutines.filter(
				(f) => f.exercise.toLowerCase().includes(c) || f.group.toLowerCase().includes(c)
			);
		});
	}
}
