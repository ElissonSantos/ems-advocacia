import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModule } from '../primeng.module';
import { CasoService } from 'src/app/services/caso.service';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteService } from 'src/app/services/cliente.service';
import { ClientesComponent } from './components/clientes/clientes.component';
import { EditClientesComponent } from './components/clientes/editClientes/edit-clientes.component';

@NgModule({
  imports: [CommonModule, ClientesRoutingModule, PrimeNgModule, ReactiveFormsModule],
  declarations: [ClientesComponent, EditClientesComponent],
  providers: [ClienteService, CasoService],
  exports: []
})
export class ClientesModule { }
