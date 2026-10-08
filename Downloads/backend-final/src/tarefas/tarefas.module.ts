import { Module } from '@nestjs/common';
import { TarefasController } from './tarefas.controller';
import { TarefasService } from './tarefas.service';

// Um módulo agrupa um recurso: aqui, o controller e o service de "tarefas".
@Module({
  controllers: [TarefasController],
  providers: [TarefasService],
})
export class TarefasModule {}
