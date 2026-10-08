import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { ProjetosService } from './projetos.service';
export declare class ProjetosController {
    private readonly projetosService;
    constructor(projetosService: ProjetosService);
    findAll(): import("./entities/projeto.entity").Projeto[];
    findOne(id: number): import("./entities/projeto.entity").Projeto;
    create(dto: CreateProjetoDto): import("./entities/projeto.entity").Projeto;
    update(id: number, dto: UpdateProjetoDto): import("./entities/projeto.entity").Projeto;
    remove(id: number): void;
}
