import { NgModule } from '@angular/core';

// import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { CasosModule } from './casos/casos.module';
import { ClientesModule } from './clientes/clientes.module';
import { MessageModule } from './message/message.module';
import { AboutModule } from './about/about.module';
import { PrimeNgModule } from './primeng.module';

@NgModule({
  imports: [
    // LoginModule,
    HomeModule,
    CasosModule,
    ClientesModule,
    MessageModule,
    AboutModule,
  ],
  declarations: [],
  providers: []
})
export class ComponentsModule { }
