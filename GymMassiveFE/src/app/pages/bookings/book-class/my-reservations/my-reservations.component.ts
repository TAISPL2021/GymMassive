import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookingRequest } from 'src/app/models/BookingRequest';
import { Class } from 'src/app/models/Class';
import { ClassService } from 'src/app/services/class.service';

@Component({
	selector: 'app-my-reservations',
	templateUrl: './my-reservations.component.html',
	styleUrls: [ './my-reservations.component.scss' ]
})
export class MyReservationsComponent implements OnInit {
	displayedColumns: string[] = [ 'name', 'date', 'action' ];
	dataSource: MatTableDataSource<Class>;
	loading = false;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private classService: ClassService, public dialog: MatDialog, private _snackBar: MatSnackBar) {}

	ngOnInit(): void {
		this.getClasses();
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	removeBooking(clas: Class): void {
		const action: BookingRequest = {
			action: 'DesasociateUser',
			clas,
			userId: sessionStorage.getItem('userId'),
			userEmail: sessionStorage.getItem('email')
		};
		this.classService.actionService(action).subscribe((res) => {
			if (res) {
				this.openSnackBar('Reservada Eliminada Exitosamente!');
				this.getClasses();
			}
		});
	}

	openSnackBar(message: string): void {
		this._snackBar.open(message, 'X', {
			horizontalPosition: 'end',
			verticalPosition: 'bottom'
		});
	}

	private getClasses() {
		this.loading = true;
		this.classService.getAllClassUser(sessionStorage.getItem('userId')).subscribe((res) => {
			this.loading = false;
			this.dataSource = new MatTableDataSource(res.map((x) => x.clas));
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}
}
