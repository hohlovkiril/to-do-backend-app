import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    description: 'The list identification.',
    default: 1,
    type: Number,
  })
  readonly listId: number;

  @ApiProperty({
    description: 'The task content.',
    default: 'Example content',
    type: String,
  })
  readonly content: string;

  @ApiProperty({
    description: 'Task due date.',
  })
  readonly deadline?: Date;
}
