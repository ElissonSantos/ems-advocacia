import { Module } from '@nestjs/common';
import { CasosModule } from './casos/casos.module';
import { ClientesModule } from './clientes/clientes.module';
import { MessagesModule } from './message/messages.module';

@Module({
  imports: [
    CasosModule,
    ClientesModule,
    MessagesModule,
  ],
  controllers: [],
  providers: [],
})
export class EmsModule {}
