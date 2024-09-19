import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from '../entities/task.entity';
import { Repository } from 'typeorm';
import { TASK_STATUS } from '../enums/status.enum';
import { ListService } from 'src/modules/list/providers/list.service';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(TaskEntity)
    private readonly repository: Repository<TaskEntity>,
    private readonly listService: ListService,
  ) {}

  async create(payload: CreateTaskDto): Promise<TaskEntity> {
    const newEntity = await this.repository.create();

    newEntity.content = payload.content;
    newEntity.status = TASK_STATUS.TODO;
    newEntity.list = await this.listService.findOne(payload.listId);
    newEntity.deadlineAt = payload.deadline;

    const savedEntity = await this.repository.save(newEntity);

    return savedEntity;
  }

  async findAll(where: { listId: number }): Promise<TaskEntity[]> {
    
    if (where.listId) {
      const list = await this.listService.findOne(where.listId);

      return list.tasks;

      return await this.repository.find({ where: { list }, relations: ['list', 'list.tasks'] })
    }

    return await this.repository.find({
      where: {},
      relations: ['list'],
    })
  }

  async findOne(id: number): Promise<TaskEntity> {
    const entity = await this.repository.findOne({ where: { id }, relations: ['list'] });

    if (!entity) {
      throw new NotFoundException('Task not found!');
    }

    return entity;
  }

  async update(id: number, payload: UpdateTaskDto): Promise<TaskEntity> {
    const entity = await this.repository.findOneBy({ id });

    if (!entity) {
      throw new NotFoundException('Task not found!');
    }

    entity.content = payload.content !== undefined ? payload.content : entity.content;
    entity.status = payload.status !== undefined ? payload.status : entity.status;
    entity.deadlineAt = payload.deadline;

    if (payload.deleteDeadline) {
      delete entity.deadlineAt;
    }

    if (Object.keys(payload).length !== 0) {
      entity.updatedAt = new Date();
    }

    const savedEntity = await this.repository.save(entity);

    return savedEntity;
  }

  async remove(id: number): Promise<TaskEntity> {
    const entity = await this.repository.findOneBy({ id });

    if (!entity) {
      throw new NotFoundException('Task not found!');
    }

    await this.repository.remove(entity);

    return entity;
  }
}
