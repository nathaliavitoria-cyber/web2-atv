import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TarefasModule } from './tarefas/tarefas.module';
import { dataSourceOptions } from './data-source';

// Módulo raiz da aplicação. Ele apenas importa os outros módulos.
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TarefasModule
  ],
})
export class AppModule {}
