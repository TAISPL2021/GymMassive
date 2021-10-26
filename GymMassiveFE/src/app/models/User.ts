export enum UserType {
	CLIENTE = 'Cliente',
	ENTRENADOR = 'Entrenador',
	ADMIN = 'Administrador'
}
export interface User {
	id?: string;
	name: string;
	lastName: string;
	birthday: string;
	documentType: string;
	documentNumber: string;
	phone: string;
	email: string;
	password: string;
	type: UserType;
}
