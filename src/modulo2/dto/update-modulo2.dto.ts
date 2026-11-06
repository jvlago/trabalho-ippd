import { PartialType } from '@nestjs/mapped-types';
import { CreateModulo2Dto } from './create-modulo2.dto';

export class UpdateModulo2Dto extends PartialType(CreateModulo2Dto) {}
