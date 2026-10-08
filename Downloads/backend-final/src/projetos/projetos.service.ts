import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { Projeto } from './entities/projeto.entity';

@Injectable()
export class ProjetosService {
  // "Banco de dados" em memória. Some ao reiniciar o servidor.
  private projetos: Projeto[] = [
    { id: 1, nome: 'Faculdade', descricao: 'Trabalhos e provas do semestre', cor: 'azul' },
    { id: 2, nome: 'Casa', cor: 'verde' },
  ];
  private proximoId = 3;

  findAll(): Projeto[] {
    return this.projetos;
  }

  findOne(id: number): Projeto {
    const projeto = this.projetos.find((p) => p.id === id);
    if (!projeto) {
      throw new NotFoundException('Projeto não encontrado');
    }
    return projeto;
  }

  create(dto: CreateProjetoDto): Projeto {
    const novo: Projeto = {
      id: this.proximoId++,
      nome: dto.nome,
      descricao: dto.descricao,
      cor: dto.cor,
    };
    this.projetos.push(novo);
    return novo;
  }

  update(id: number, dto: UpdateProjetoDto): Projeto {
    const projeto = this.findOne(id);
    Object.assign(projeto, dto); // atualiza apenas os campos enviados
    return projeto;
  }

  remove(id: number): void {
    const projeto = this.findOne(id);
    this.projetos = this.projetos.filter((p) => p.id !== projeto.id);
  }
}
