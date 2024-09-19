import { forwardRef, Module } from '@nestjs/common';
import { TaskService } from './providers/task.service';
import { TaskController } from './controllers/task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { ListModule } from '../list/list.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity]),
    forwardRef(() => ListModule),
  ],
  controllers: [TaskController],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
