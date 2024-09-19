import { ListEntity } from "src/modules/list/entities/list.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TASK_STATUS } from "../enums/status.enum";

@Entity({
	name: 'task'
})
export class TaskEntity {
	@PrimaryGeneratedColumn()
	public readonly id: number;

	@Column({ type: 'text', nullable: false })
	public content: string;

	@Column({ type: 'enum', enum: TASK_STATUS, nullable: false, })
	public status: TASK_STATUS;

	@Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  public createdAt: Date;

  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  public updatedAt: Date;

	@Column({
    type: 'timestamp with time zone',
		nullable: true,
  })
  public deadlineAt: Date;

	@ManyToOne(() => ListEntity, (list) => list.tasks, { onDelete: 'CASCADE' })
	public list: ListEntity;
}