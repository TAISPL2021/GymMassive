import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models';
import { UserService } from 'src/app/services';
import { CreateEmployeeComponent } from '../../create-employee/create-employee.component';

@Component({
	selector: 'app-employee-table',
	templateUrl: './employee-table.component.html',
	styleUrls: [ './employee-table.component.scss' ]
})
export class EmployeeTableComponent implements OnInit {
	displayedColumns: string[] = [
		'documentType',
		'documentNumber',
		'name',
		'lastName',
		'phone',
		'email',
		'type',
		'action'
	];
	dataSource: MatTableDataSource<User>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(private userService: UserService, public dialog: MatDialog, private _snackBar: MatSnackBar) {}

	ngOnInit(): void {
		this.getEmployees();
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	createEmployee(): void {
		const dialogRef = this.dialog.open(CreateEmployeeComponent);

		dialogRef.afterClosed().subscribe((result) => {
			this.userService.createEmployee(result).subscribe(
				(res) => {
					this.getEmployees();
				},
				(error) => {}
			);
		});
	}

	deleteEmployee(id: string): void {
		this.userService.deleteEmployee(id).subscribe((res) => {
			this.openSnackBar('Empleado Eliminado Satisfactoriamente');
			this.getEmployees();
		});
	}

	openSnackBar(message: string): void {
		this._snackBar.open(message, 'X', {
			horizontalPosition: 'end',
			verticalPosition: 'top'
		});
	}

	private getEmployees() {
		this.userService.getEmployees().subscribe((res) => {
			this.dataSource = new MatTableDataSource(res);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}
}
