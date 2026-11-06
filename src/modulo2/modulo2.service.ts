import { Injectable } from '@nestjs/common';
import { CreateModulo2Dto } from './dto/create-modulo2.dto';
import { UpdateModulo2Dto } from './dto/update-modulo2.dto';

@Injectable()
export class Modulo2Service {
  create(createModulo2Dto: CreateModulo2Dto) {
    return 'This action adds a new modulo2';
  }

  findAll() {
    return `This action returns all modulo2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modulo2`;
  }

  update(id: number, updateModulo2Dto: UpdateModulo2Dto) {
    return `This action updates a #${id} modulo2`;
  }

  remove(id: number) {
    return `This action removes a #${id} modulo2`;
  }
}
