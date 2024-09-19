import { TASK_STATUS } from "../enums/status.enum";

export class UpdateTaskDto {
	readonly content?: string;
	readonly status?: TASK_STATUS;
	readonly deadline?: Date;
	readonly deleteDeadline?: true;
}
