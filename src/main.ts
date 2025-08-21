import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  //app.setGlobalPrefix('api');
  //Determina prefixul global pentru toate rutele
  //Ex: http://localhost:3000/api/user/all

  await app.listen(4200);
}
bootstrap();
