import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DetailClienteComponent } from './components/detailCliente/detail-cliente.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { PrimeNgModule } from './primeng.module';

@NgModule({
  imports: [ CommonModule, ClientesRoutingModule ],
  declarations: [ ClientesComponent, DetailClienteComponent ],
  providers: [ ClienteService ],
  exports: []
})
export class ClientesModule {}
