import { NgModule } from '@angular/core';

import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { CasosModule } from './casos/casos.module';
import { ClientesModule } from './clientes/clientes.module';

@NgModule({
  imports: [
    LoginModule,
    HomeModule,
    CasosModule,
    ClientesModule
  ],
  declarations: [],
  providers: []
})
export class ComponentsModule { }
