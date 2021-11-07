import { Routine } from '.';

export class TrainingModified {
	training: Routine;
	day: string;
	sets: number;
	reps: number;
}

export class UserTraning {
	id: string;
	userId: string;
	training: TrainingModified[];
}
