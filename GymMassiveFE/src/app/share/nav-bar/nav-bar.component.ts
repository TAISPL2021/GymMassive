import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'dex-nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: [ './nav-bar.component.scss' ],
	encapsulation: ViewEncapsulation.None,
	host: { class: 'dex-NavBar' }
})
export class NavBarComponent implements OnInit {
	constructor() {}

	@Input() routes: any = {};
	@ViewChild('drawer', { static: true })
	drawer: any;

	ngOnInit() {
		debugger
		this.drawer.toggle();
	}

	deleteToken() {
		sessionStorage.removeItem('JWT');
	}
}
