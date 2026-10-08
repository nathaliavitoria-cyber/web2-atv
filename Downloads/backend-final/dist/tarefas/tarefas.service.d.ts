import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { Tarefa } from './entities/tarefa.entity';
export declare class TarefasService {
    private tarefas;
    private proximoId;
    findAll(): Tarefa[];
    findOne(id: number): Tarefa;
    create(dto: CreateTarefaDto): Tarefa;
    update(id: number, dto: UpdateTarefaDto): Tarefa;
    remove(id: number): void;
}
