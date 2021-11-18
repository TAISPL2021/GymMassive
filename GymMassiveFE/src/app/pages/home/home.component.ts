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
		{
			path: '',
			name: 'Entrenamiento',
			icon: '',
			children: [
				{ path: 'training', name: 'Consulta de Ejercicios', icon: 'widgets' },
				{ path: 'training/tracking', name: 'Mi Rutina', icon: 'widgets' },
				{ path: 'training/asociate', name: 'Asociar Rutina', icon: 'widgets' }
			]
		},
		{
			path: '',
			name: 'Administrativo',
			icon: '',
			children: [
				{
					path: 'employees',
					name: 'Listado de Empleados',
					icon: 'people'
				}
			]
		},
		{
			path: '',
			name: 'Planes',
			icon: '',
			children: [
				{
					path: 'suscription',
					name: 'Suscribirse a Plan',
					icon: 'people'
				}
			]
		}
	];
	constructor(private router: Router) {}
	ngOnInit() {
		//this.router.navigate([ 'home/training' ]);
	}
}
