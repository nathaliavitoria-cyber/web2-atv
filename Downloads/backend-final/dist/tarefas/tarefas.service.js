"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarefasService = void 0;
const common_1 = require("@nestjs/common");
let TarefasService = class TarefasService {
    constructor() {
        this.tarefas = [
            { id: 1, titulo: 'Estudar NestJS', descricao: 'Módulos, controllers e services', concluida: false },
            { id: 2, titulo: 'Preparar a aula de hoje', concluida: true },
        ];
        this.proximoId = 3;
    }
    findAll() {
        return this.tarefas;
    }
    findOne(id) {
        const tarefa = this.tarefas.find((t) => t.id === id);
        if (!tarefa) {
            throw new common_1.NotFoundException('Tarefa não encontrada');
        }
        return tarefa;
    }
    create(dto) {
        const nova = {
            id: this.proximoId++,
            titulo: dto.titulo,
            descricao: dto.descricao,
            concluida: false,
        };
        this.tarefas.push(nova);
        return nova;
    }
    update(id, dto) {
        const tarefa = this.findOne(id);
        Object.assign(tarefa, dto);
        return tarefa;
    }
    remove(id) {
        const tarefa = this.findOne(id);
        this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id);
    }
};
exports.TarefasService = TarefasService;
exports.TarefasService = TarefasService = __decorate([
    (0, common_1.Injectable)()
], TarefasService);
//# sourceMappingURL=tarefas.service.js.map