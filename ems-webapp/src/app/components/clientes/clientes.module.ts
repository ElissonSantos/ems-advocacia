import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesComponent } from './components/clientes/clientes.component';
import { DetailClienteComponent } from './components/detailCliente/detail-cliente.component';
import { ClientesRoutingModule } from './clientes-routing.module';

@NgModule({
  imports: [ CommonModule, ClientesRoutingModule ],
  declarations: [ ClientesComponent, DetailClienteComponent ],
  providers: [],
  exports: []
})
export class ClientesModule {}
