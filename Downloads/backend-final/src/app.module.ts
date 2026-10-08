import { Module } from '@nestjs/common';
import { TarefasModule } from './tarefas/tarefas.module';
import { ProjetosModule } from './projetos/projetos.module';

// Módulo raiz da aplicação. Ele apenas importa os outros módulos.
@Module({
  imports: [TarefasModule, ProjetosModule],
})
export class AppModule {}
