import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './components/clientes/clientes.component';
import { EditClientesComponent } from './components/clientes/editClientes/edit-clientes.component';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'editCliente', component: EditClientesComponent },
  { path: 'editCliente/:id', component: EditClientesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
