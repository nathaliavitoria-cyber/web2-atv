import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prefixo global: todas as rotas começam com /api (ex.: /api/tarefas).
  app.setGlobalPrefix('api');

  // Validação automática de TODO DTO usando class-validator:
  //  - whitelist: remove campos que não existem no DTO
  //  - forbidNonWhitelisted: retorna 400 se enviarem campos desconhecidos
  //  - transform: entrega o body já como instância da classe do DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(3000);
  console.log('API NestJS To-Do em http://localhost:3000/api/tarefas');
}
bootstrap();
