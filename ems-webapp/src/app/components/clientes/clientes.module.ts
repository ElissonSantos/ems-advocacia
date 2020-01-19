import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModule } from '../primeng.module';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ClienteService } from 'src/app/services/cliente.service';
import { EditClientesComponent } from './components/clientes/editClientes/editClientes.component';

@NgModule({
  imports: [CommonModule, ClientesRoutingModule, PrimeNgModule, ReactiveFormsModule],
  declarations: [ClientesComponent, EditClientesComponent],
  providers: [ClienteService],
  exports: []
})
export class ClientesModule { }
