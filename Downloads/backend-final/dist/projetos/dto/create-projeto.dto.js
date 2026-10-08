"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjetoDto = exports.CORES_PROJETO = void 0;
const class_validator_1 = require("class-validator");
exports.CORES_PROJETO = ['vermelho', 'verde', 'azul', 'amarelo', 'roxo'];
class CreateProjetoDto {
}
exports.CreateProjetoDto = CreateProjetoDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'O nome deve ser um texto.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome é obrigatório.' }),
    (0, class_validator_1.MinLength)(3, { message: 'O nome deve ter ao menos 3 caracteres.' }),
    (0, class_validator_1.MaxLength)(60, { message: 'O nome deve ter no máximo 60 caracteres.' }),
    __metadata("design:type", String)
], CreateProjetoDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'A descrição deve ser um texto.' }),
    (0, class_validator_1.MaxLength)(200, { message: 'A descrição deve ter no máximo 200 caracteres.' }),
    __metadata("design:type", String)
], CreateProjetoDto.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.IsIn)(exports.CORES_PROJETO, {
        message: 'A cor deve ser uma destas: vermelho, verde, azul, amarelo ou roxo.',
    }),
    __metadata("design:type", String)
], CreateProjetoDto.prototype, "cor", void 0);
//# sourceMappingURL=create-projeto.dto.js.map