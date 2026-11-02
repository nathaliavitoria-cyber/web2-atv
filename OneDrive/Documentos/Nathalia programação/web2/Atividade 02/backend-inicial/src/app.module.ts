import { Module } from '@nestjs/common';
import { TarefasModule } from './tarefas/tarefas.module';

// Módulo raiz da aplicação. Ele apenas importa os outros módulos.
@Module({
  imports: [TarefasModule],
})
export class AppModule {}
