import { Controller } from '@nestjs/common';
import { TarefasService } from './tarefas.service';

// @Controller('tarefas') + prefixo global 'api' => rotas em /api/tarefas.
@Controller('tarefas')
export class TarefasController {
  // Injeção de dependência: o Nest entrega uma instância de TarefasService aqui.
  constructor(private readonly tarefasService: TarefasService) {}

  @Get()
  findAll() {
    return this.tarefasService.findAll();
  }

  // =====================================================================
  // TODO (aula): criar as rotas, seguindo o ROTEIRO-AULA.md:
  //   @Get()        findAll()
  //   @Get(':id')   findOne()
  //   @Post()       create()
  //   @Put(':id')   update()
  //   @Delete(':id') remove()
  // =====================================================================
}
function Get(): (target: TarefasController, propertyKey: "findAll", descriptor: TypedPropertyDescriptor<() => any>) => void | TypedPropertyDescriptor<() => any> {
  throw new Error('Function not implemented.');
}

