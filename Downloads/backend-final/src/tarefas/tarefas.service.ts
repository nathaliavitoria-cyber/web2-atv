import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { Tarefa } from './entities/tarefa.entity';

// @Injectable marca a classe como um "provider": o Nest sabe criar e injetar
// esta instância onde ela for pedida (ex.: no construtor do controller).
@Injectable()
export class TarefasService {
  // "Banco de dados" em memória (por enquanto). Some ao reiniciar o servidor.
  private tarefas: Tarefa[] = [
    { id: 1, titulo: 'Estudar NestJS', descricao: 'Módulos, controllers e services', concluida: false },
    { id: 2, titulo: 'Preparar a aula de hoje', concluida: true },
  ];
  private proximoId = 3;

  findAll(): Tarefa[] {
    return this.tarefas;
  }

  findOne(id: number): Tarefa {
    const tarefa = this.tarefas.find((t) => t.id === id);
    if (!tarefa) {
      // NotFoundException vira automaticamente uma resposta HTTP 404.
      throw new NotFoundException('Tarefa não encontrada');
    }
    return tarefa;
  }

  create(dto: CreateTarefaDto): Tarefa {
    const nova: Tarefa = {
      id: this.proximoId++,
      titulo: dto.titulo,
      descricao: dto.descricao,
      concluida: false,
    };
    this.tarefas.push(nova);
    return nova;
  }

  update(id: number, dto: UpdateTarefaDto): Tarefa {
    const tarefa = this.findOne(id);
    Object.assign(tarefa, dto); // atualiza apenas os campos enviados
    return tarefa;
  }

  remove(id: number): void {
    const tarefa = this.findOne(id);
    this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id);
  }
}
