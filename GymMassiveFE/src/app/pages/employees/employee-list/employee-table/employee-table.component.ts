import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models';
import { UserService } from 'src/app/services';

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

	constructor(private userService: UserService) {}

	ngOnInit(): void {
		this.userService.getEmployees().subscribe((res) => {
			this.dataSource = new MatTableDataSource(res);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}
}
