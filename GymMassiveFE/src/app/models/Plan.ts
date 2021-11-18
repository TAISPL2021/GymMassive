export interface Plan {
	id: string;
	days: number;
	name: string;
	price: number;
}

export interface UserPlan {
	id: string;
	userId: string;
	plan: Plan;
	initialDate: Date;
	endDate: Date;
}
