import { Component, OnInit } from '@angular/core';
import { NavigationRoute } from 'src/app/interfaces/navigation-route';
import { HomeConfig } from './home.config';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	routes: NavigationRoute[] = [];
	ngOnInit() {
		this.routes = HomeConfig.NavigationObject[sessionStorage.getItem('userType')];
	}
}
