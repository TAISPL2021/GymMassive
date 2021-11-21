import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookingRequest } from 'src/app/models/BookingRequest';
import { Class } from 'src/app/models/Class';
import { ClassService } from 'src/app/services/class.service';
import { MyReservationsComponent } from '../my-reservations/my-reservations.component';

@Component({
	selector: 'app-class-table',
	templateUrl: './class-table.component.html',
	styleUrls: [ './class-table.component.scss' ]
})
export class ClassTableComponent implements OnInit {

	displayedColumns: string[] = [ 'name', 'date', 'capacity', 'action' ];
	dataSource: MatTableDataSource<Class>;

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

	displayBookings() {
		const dialogRef = this.dialog.open(MyReservationsComponent, { minWidth: 750 });
		dialogRef.afterClosed().subscribe((result) => {
			this.getClasses();
		});
	}

	bookClass(clas: Class): void {
		const action: BookingRequest = {
			action: 'AsociateUser',
			clas,
			userId: sessionStorage.getItem('userId'),
			userEmail: sessionStorage.getItem('email')
		};
		this.classService.actionService(action).subscribe((res) => {
			if (res) {
				this.openSnackBar('Clase Reservada Exitosamente!');
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
		this.classService.getAllClass().subscribe((res) => {
			this.dataSource = new MatTableDataSource(res);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}
}
