export class HomeConfig {
	static NavigationObject = {
		Administrador: [
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
			},
			{
				path: '',
				name: 'Reservas',
				icon: '',
				children: [
					{
						path: 'booking',
						name: 'Reservar Clase',
						icon: 'book'
					},
					{ path: 'booking/manage', name: 'Listado de Clases', icon: 'widgets' }
				]
			}
		],
		Cliente: [
			{
				path: '',
				name: 'Entrenamiento',
				icon: '',
				children: [
					{ path: 'training', name: 'Consulta de Ejercicios', icon: 'widgets' },
					{ path: 'training/tracking', name: 'Mi Rutina', icon: 'widgets' }
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
			},
			{
				path: '',
				name: 'Reservas',
				icon: '',
				children: [
					{
						path: 'booking',
						name: 'Reservar Clase',
						icon: 'book'
					}
				]
			}
		],
		Entrenador: [
			{
				path: '',
				name: 'Entrenamiento',
				icon: '',
				children: [
					{ path: 'training', name: 'Consulta de Ejercicios', icon: 'widgets' },
					{ path: 'training/asociate', name: 'Asociar Rutina', icon: 'widgets' }
				]
			},
			{
				path: '',
				name: 'Reservas',
				icon: '',
				children: [ { path: 'booking/manage', name: 'Listado de Clases', icon: 'widgets' } ]
			}
		]
	};
}
