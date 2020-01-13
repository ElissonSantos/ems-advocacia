import { Module } from '@nestjs/common';

import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { GenericDA } from 'src/shared/generic';

@Module({
  imports: [],
  controllers: [ ClientesController ],
  providers: [ ClientesService, GenericDA ],
})
export class ClientesModule {}
