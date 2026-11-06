import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Modulo2Service } from './modulo2.service';
import { CreateModulo2Dto } from './dto/create-modulo2.dto';
import { UpdateModulo2Dto } from './dto/update-modulo2.dto';

@Controller('modulo2')
export class Modulo2Controller {
  constructor(private readonly modulo2Service: Modulo2Service) {}

  @Post()
  create(@Body() createModulo2Dto: CreateModulo2Dto) {
    return this.modulo2Service.create(createModulo2Dto);
  }

  @Get()
  findAll() {
    return this.modulo2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modulo2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModulo2Dto: UpdateModulo2Dto) {
    return this.modulo2Service.update(+id, updateModulo2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modulo2Service.remove(+id);
  }
}
