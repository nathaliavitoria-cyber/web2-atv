import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { Projeto } from './entities/projeto.entity';
export declare class ProjetosService {
    private projetos;
    private proximoId;
    findAll(): Projeto[];
    findOne(id: number): Projeto;
    create(dto: CreateProjetoDto): Projeto;
    update(id: number, dto: UpdateProjetoDto): Projeto;
    remove(id: number): void;
}
