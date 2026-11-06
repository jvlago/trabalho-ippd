import { Module } from '@nestjs/common';
import { Modulo2Service } from './modulo2.service';
import { Modulo2Controller } from './modulo2.controller';

@Module({
  controllers: [Modulo2Controller],
  providers: [Modulo2Service],
})
export class Modulo2Module {}
