export interface Class {
	id: string;
	name: string;
	date: Date;
	capacity: number;
}

export interface UserClass {
	clas: Class;
	id: string;
	userId: string;
}
