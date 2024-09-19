import { Module } from '@nestjs/common';
import { ListController } from './controllers/list.controller';
import { ListService } from './providers/list.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListEntity } from './entities/list.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ListEntity]),
  ],
  controllers: [ListController],
  providers: [ListService],
  exports: [ListService],
})
export class ListModule {}
