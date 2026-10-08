"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjetoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_projeto_dto_1 = require("./create-projeto.dto");
class UpdateProjetoDto extends (0, mapped_types_1.PartialType)(create_projeto_dto_1.CreateProjetoDto) {
}
exports.UpdateProjetoDto = UpdateProjetoDto;
//# sourceMappingURL=update-projeto.dto.js.map