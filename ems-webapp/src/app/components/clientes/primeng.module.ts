import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

@NgModule({
  imports: [ CommonModule, TableModule ],
  declarations: [],
  providers: [],
  exports: [ TableModule ]
})
export class PrimeNgModule {}
