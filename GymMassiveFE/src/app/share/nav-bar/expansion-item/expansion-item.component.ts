import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'dex-expansion-item',
	templateUrl: './expansion-item.component.html',
	styleUrls: [ './expansion-item.component.scss' ]
})
export class ExpansionItemComponent implements OnInit {
	@Input() route: any;
	constructor() {}

	ngOnInit() {}
}
