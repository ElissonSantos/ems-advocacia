import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasosComponent } from './components/casos/casos.component';
import { DetailCasoComponent } from './components/detailCaso/detail-caso.component';
import { NotFoundComponent } from '../notFound/not-found.component';

const routes: Routes = [
  { path: '', component: CasosComponent },
  { path: 'detailCasos', component: DetailCasoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasosRoutingModule { }
