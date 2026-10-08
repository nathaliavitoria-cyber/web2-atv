import { PartialType } from '@nestjs/mapped-types';
import { CreateProjetoDto } from './create-projeto.dto';

// PartialType torna todos os campos de CreateProjetoDto opcionais,
// reaproveitando as mesmas validações.
export class UpdateProjetoDto extends PartialType(CreateProjetoDto) {}
