import { TaskEntity } from "src/modules/task/entities/task.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
	name: 'list'
})
export class ListEntity {
	@PrimaryGeneratedColumn()
	public readonly id: number;

	@Column({ type: 'text', nullable: true })
	public icon: string;

	@Column({ type: 'text', nullable: false, unique: true })
	public title: string;

	@OneToMany(() => TaskEntity, (task) => task.list, { cascade: true })
	public tasks: TaskEntity[];
}