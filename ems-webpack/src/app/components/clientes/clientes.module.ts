import { NgModule } from '@angular/core';

import { ClientesComponent } from './components/clientes/clientes.component';
import { DetailClienteComponent } from './components/detailCliente/detail-cliente.component';
import { ClientesRoutingModule } from './clientes-routing.module';

@NgModule({
  imports: [ ClientesRoutingModule ],
  declarations: [ ClientesComponent, DetailClienteComponent ],
  providers: [],
  exports: []
})
export class ClientesModule {}
