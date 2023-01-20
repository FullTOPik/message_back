import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';

import { PORT } from './config/config';

import { AppModule } from './app.module';
import { ValidationPipe } from './common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(PORT);
}
bootstrap();
