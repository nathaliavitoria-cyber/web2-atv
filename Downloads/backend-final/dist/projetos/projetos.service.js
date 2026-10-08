"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjetosService = void 0;
const common_1 = require("@nestjs/common");
let ProjetosService = class ProjetosService {
    constructor() {
        this.projetos = [
            { id: 1, nome: 'Faculdade', descricao: 'Trabalhos e provas do semestre', cor: 'azul' },
            { id: 2, nome: 'Casa', cor: 'verde' },
        ];
        this.proximoId = 3;
    }
    findAll() {
        return this.projetos;
    }
    findOne(id) {
        const projeto = this.projetos.find((p) => p.id === id);
        if (!projeto) {
            throw new common_1.NotFoundException('Projeto não encontrado');
        }
        return projeto;
    }
    create(dto) {
        const novo = {
            id: this.proximoId++,
            nome: dto.nome,
            descricao: dto.descricao,
            cor: dto.cor,
        };
        this.projetos.push(novo);
        return novo;
    }
    update(id, dto) {
        const projeto = this.findOne(id);
        Object.assign(projeto, dto);
        return projeto;
    }
    remove(id) {
        const projeto = this.findOne(id);
        this.projetos = this.projetos.filter((p) => p.id !== projeto.id);
    }
};
exports.ProjetosService = ProjetosService;
exports.ProjetosService = ProjetosService = __decorate([
    (0, common_1.Injectable)()
], ProjetosService);
//# sourceMappingURL=projetos.service.js.map