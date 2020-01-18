import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DetailClienteComponent } from './components/detailCliente/detail-cliente.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { PrimeNgModule } from './primeng.module';

@NgModule({
  imports: [
    CommonModule,
    ClientesRoutingModule,
    TableModule
  ],
  declarations: [ClientesComponent, DetailClienteComponent],
  providers: [ClienteService],
  exports: []
})
export class ClientesModule { }
