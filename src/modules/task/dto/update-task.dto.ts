import { ApiProperty } from '@nestjs/swagger';
import { TASK_STATUS } from '../enums/status.enum';

export class UpdateTaskDto {
  @ApiProperty({
    description: 'The new task content.',
  })
  readonly content?: string;

  @ApiProperty({
    description: 'The new task status.',
    type: Number,
  })
  readonly status?: TASK_STATUS;

  @ApiProperty({
    description: 'The new task due date',
  })
  readonly deadline?: Date;

  @ApiProperty({
    description: 'Is the deadline date canceled',
  })
  readonly deleteDeadline?: true;
}
