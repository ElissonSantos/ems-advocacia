import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasosComponent } from './components/casos/casos.component';
import { DetailCasoComponent } from './components/detailCaso/detail-caso.component';
import { CasosRoutingModule } from './casos-routing.module';

@NgModule({
  imports: [ CommonModule, CasosRoutingModule ],
  declarations: [ CasosComponent, DetailCasoComponent ],
  providers: [],
  exports: []
})
export class CasosModule {}
