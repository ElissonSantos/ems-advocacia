import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule
} from '@angular/material';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  providers: [],
  imports: [
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ButtonModule
  ],
  exports: [
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ButtonModule
  ],
})
export class MaterialModule { }
