import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasosComponent } from './components/casos.component';
import { EditCasosComponent } from './components/editCasos/edit-casos.component';

const routes: Routes = [
  { path: '', component: CasosComponent },
  { path: 'editCasos', component: EditCasosComponent },
  { path: 'editCasos/:id', component: EditCasosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasosRoutingModule { }
