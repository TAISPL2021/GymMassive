import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'dex-expansion-panel-nav',
	templateUrl: './expansion-panel-nav.component.html',
	styleUrls: [ './expansion-panel-nav.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class ExpansionPanelNavComponent implements OnInit {
	@Input() routes: any;
	constructor() {}

	ngOnInit() {}
}
