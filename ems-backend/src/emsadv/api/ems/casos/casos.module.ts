import { Module } from '@nestjs/common';

import { CasosController } from './casos.controller';
import { CasosService } from './casos.service';
import { GenericDA } from 'src/shared/generic';

@Module({
  imports: [],
  controllers: [ CasosController ],
  providers: [ CasosService, GenericDA ],
})
export class CasosModule {}
