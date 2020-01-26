import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimeNgModule } from '../primeng.module';
import { CasoService } from 'src/app/services/caso.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { CasosRoutingModule } from './casos-routing.module';
import { CasosComponent } from './components/casos.component';
import { EditCasosComponent } from './components/editCasos/edit-casos.component';

@NgModule({
  imports: [CommonModule, CasosRoutingModule, PrimeNgModule, ReactiveFormsModule],
  declarations: [CasosComponent, EditCasosComponent],
  providers: [ClienteService, CasoService],
  exports: []
})
export class CasosModule { }
