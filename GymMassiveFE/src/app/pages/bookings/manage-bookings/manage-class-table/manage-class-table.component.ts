import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookingRequest } from 'src/app/models/BookingRequest';
import { Class } from 'src/app/models/Class';
import { ClassService } from 'src/app/services/class.service';
import { CreateClassComponent } from '../create-class/create-class.component';
import { UpdateClassComponent } from '../update-class/update-class.component';

@Component({
	selector: 'app-manage-class-table',
	templateUrl: './manage-class-table.component.html',
	styleUrls: [ './manage-class-table.component.scss' ]
})
export class ManageClassTableComponent implements OnInit {
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

	createClass() {
		const dialogRef = this.dialog.open(CreateClassComponent, { minWidth: 750 });
		dialogRef.afterClosed().subscribe((result) => {
			this.classService.actionService(result).subscribe((res) => {
				this.openSnackBar('Clase creada correctamente!');
				this.getClasses();
			});
		});
	}

	updateClass(clas: Class) {
		const dialogRef = this.dialog.open(UpdateClassComponent, { data: { ...clas } });

		dialogRef.afterClosed().subscribe((result) => {
			this.classService.actionService(result).subscribe((res) => {
				this.openSnackBar('Clase actualizada correctamente!');
				this.getClasses();
			});
		});
	}

	deleteClass(clas: Class): void {
		const action: BookingRequest = {
			action: 'Delete',
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
