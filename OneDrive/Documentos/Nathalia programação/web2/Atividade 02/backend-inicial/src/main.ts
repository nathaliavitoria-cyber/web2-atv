import { NestFactory } from '@nestjs/core';
// import { ValidationPipe } from '@nestjs/common'; // TODO (validação)
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prefixo global: todas as rotas começam com /api (ex.: /api/tarefas).
  app.setGlobalPrefix('api');

  // TODO (validação): habilitar o ValidationPipe global para validar os DTOs.
  // app.useGlobalPipes(
  //   new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }),
  // );

  await app.listen(3000);
  console.log('API NestJS To-Do em http://localhost:3000/api/tarefas');
}
bootstrap();
