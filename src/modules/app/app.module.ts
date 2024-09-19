import { Module } from "@nestjs/common";
import { ListModule } from "../list/list.module";
import { TaskModule } from "../task/task.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { config } from 'dotenv';

config();

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.POSTGRES_HOST,
			port: Number(process.env.POSTGRES_PORT),
			username: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASS,
			database: process.env.POSTGRES_NAME,
			entities: ['dist/**/*.entity{.ts,.js}'],
			synchronize: true,
		}),
		ListModule,
		TaskModule,
	]
})
export class AppModule {}