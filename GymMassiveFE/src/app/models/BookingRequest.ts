import { Class } from './Class';

export interface BookingRequest {
	userEmail: string;
	userId: string;
	clas: Class;
	action: string;
}
