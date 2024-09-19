import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateListDto } from '../dto/create-list.dto';
import { UpdateListDto } from '../dto/update-list.dto';
import { ListEntity } from '../entities/list.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ListService {

  constructor(
    @InjectRepository(ListEntity)
    private readonly repository: Repository<ListEntity>
  ) {}

  async create(payload: CreateListDto): Promise<ListEntity> {
    const titleExists = await this.repository.findOneBy({ title: payload.title });

    if (titleExists) {
      throw new BadRequestException('Title already exists!');
    }

    const newEntity = await this.repository.create();

    newEntity.icon = payload.icon;
    newEntity.title = payload.title;

    const savedEntity = await this.repository.save(newEntity);

    return { ...savedEntity, tasks: [] };
  }

  async findAll(): Promise<ListEntity[]> {
    return await this.repository.find({
      where: {},
      relations: ['tasks']
    });
  }

  async findOne(id: number): Promise<ListEntity> {
    const entity = await this.repository.findOne({ where: { id }, relations: ['tasks'] });

    if (!entity) {
      throw new NotFoundException('List not found!');
    }

    return entity;
  }

  async update(id: number, payload: UpdateListDto): Promise<ListEntity> {
    const entity = await this.repository.findOneBy({ id });

    if (!entity) {
      throw new NotFoundException('List not found!');
    }

    if (payload.title) {
      const titleExists = await this.repository.findOneBy({ title: payload.title })

      if (titleExists) {
        throw new BadRequestException('Title already exists!');
      }
    }

    entity.icon = payload.icon !== undefined ? payload.icon : entity.icon;
    entity.title = payload.title !== undefined ? payload.title : entity.title;

    const savedEntity = await this.repository.save(entity);

    return savedEntity
  }

  async remove(id: number): Promise<ListEntity> {
    const entity = await this.repository.findOneBy({ id });

    if (!entity) {
      throw new NotFoundException('List not found');
    }

    await this.repository.remove(entity);

    return entity;
  }
}
