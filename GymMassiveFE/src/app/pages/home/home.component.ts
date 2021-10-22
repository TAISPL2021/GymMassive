import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationRoute } from 'src/app/interfaces/navigation-route';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	routes: NavigationRoute[] = [
		{ path: 'training', name: 'Consulta de Ejercicios', icon: 'widgets' },
		{
			path: '',
			name: 'Administrativo',
			icon: '',
			children: [
				{
					path: 'administrative/list',
					name: 'Listado de Empleados',
					icon: 'people'
				}
			]
		}
	];
	constructor(private router: Router) {}
	ngOnInit() {
		this.router.navigate([ 'home/training' ]);
	}
}
