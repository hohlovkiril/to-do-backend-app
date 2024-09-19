import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { Logger } from '@nestjs/common';
import { config } from 'dotenv';

config();

async function bootstrap() {
  const logger = new Logger('Server');

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE']
  })

  app.setGlobalPrefix('/api/')

  await app.listen(process.env.NEST_PORT, process.env.NEST_HOST, () => {
    logger.log(`Server listening on: http://${process.env.NEST_HOST}:${process.env.NEST_PORT}`);
  });
}

bootstrap();