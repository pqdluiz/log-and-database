import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users/users.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(UsersModule);
  await app.listen(4000);
}

bootstrap();