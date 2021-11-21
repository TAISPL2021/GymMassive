import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';

@Component({
	selector: 'app-book-class',
	templateUrl: './book-class.component.html',
	styleUrls: [ './book-class.component.scss' ]
})
export class BookClassComponent implements OnInit {
	constructor(public dialog: MatDialog) {}

	ngOnInit(): void {}

	
}
