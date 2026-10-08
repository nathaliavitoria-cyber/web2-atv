import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

// DTO = Data Transfer Object. Descreve o formato ESPERADO do corpo da requisição.
// As anotações (decorators) do class-validator definem as REGRAS de validação.
// O ValidationPipe (habilitado em main.ts) aplica essas regras automaticamente.
export class CreateTarefaDto {
  @IsString({ message: 'O título deve ser um texto.' })
  @IsNotEmpty({ message: 'O título é obrigatório.' })
  @MinLength(3, { message: 'O título deve ter ao menos 3 caracteres.' })
  @MaxLength(100, { message: 'O título deve ter no máximo 100 caracteres.' })
  titulo: string;

  @IsOptional()
  @IsString({ message: 'A descrição deve ser um texto.' })
  @MaxLength(300, { message: 'A descrição deve ter no máximo 300 caracteres.' })
  descricao?: string;
}
