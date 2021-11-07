import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models';
import { UserService } from 'src/app/services';
import { UserTrainingService } from 'src/app/services/userTraining.service';
import { AsociateRoutineModalComponent } from '../asociate-routine-modal/asociate-routine-modal.component';

@Component({
	selector: 'app-client-list',
	templateUrl: './client-list.component.html',
	styleUrls: [ './client-list.component.scss' ]
})
export class ClientListComponent implements OnInit {
	displayedColumns: string[] = [ 'documentType', 'documentNumber', 'name', 'lastName', 'phone', 'email', 'action' ];
	dataSource: MatTableDataSource<User>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	constructor(
		private userService: UserService,
		private userTrainingService: UserTrainingService,
		public dialog: MatDialog,
		private _snackBar: MatSnackBar
	) {}

	ngOnInit(): void {
		this.getClients();
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	asociateClientTraining(client: User): void {
		const dialogRef = this.dialog.open(AsociateRoutineModalComponent, { data: { client }, minWidth: 750 });

		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				this.userTrainingService.asociateUserTraining(result).subscribe((res) => {
					this.openSnackBar('Rutina Asociada Satisfactoriamente');
				});
			}
		});
	}

	openSnackBar(message: string): void {
		this._snackBar.open(message, 'X', {
			horizontalPosition: 'end',
			verticalPosition: 'top'
		});
	}

	private getClients() {
		this.userService.getClients().subscribe((res) => {
			this.dataSource = new MatTableDataSource(res);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}
}
