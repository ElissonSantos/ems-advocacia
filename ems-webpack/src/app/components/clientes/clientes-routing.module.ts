import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailClienteComponent } from './components/detailCliente/detail-cliente.component';
import { ClientesComponent } from './components/clientes/clientes.component';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'detailCliente', component: DetailClienteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
