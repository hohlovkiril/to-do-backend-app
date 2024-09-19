export class CreateTaskDto {
	readonly listId: number;
	readonly content: string;
	readonly deadline?: Date;
}
