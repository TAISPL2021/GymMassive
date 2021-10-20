import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RoutinesService } from 'src/app/services';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-consult-routines',
	templateUrl: './consult-routines.component.html',
	styleUrls: [ './consult-routines.component.scss' ]
})
export class ConsultRoutinesComponent implements OnInit, OnDestroy {
	public routines: any[] = [];
	private originalRoutines: any[] = [];
	searchControl = new FormControl();
	componentDestroyed$ = new Subject();
	constructor(private routinesService: RoutinesService) {}

	ngOnInit(): void {
		this.routinesService.getAllRoutines().subscribe((res) => {
			this.routines = res;
			this.originalRoutines = Object.assign([], res);
		});

		this.searchControl.valueChanges.pipe(debounceTime(500), takeUntil(this.componentDestroyed$)).subscribe((c) => {
			this.routines = this.originalRoutines.filter(
				(f) => f.exercise.toLowerCase().includes(c) || f.group.toLowerCase().includes(c)
			);
		});
	}

	ngOnDestroy(): void {
		this.componentDestroyed$.next();
		this.componentDestroyed$.complete();
	}
}
