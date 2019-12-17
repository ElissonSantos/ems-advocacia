import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home.component';
import { AccordionModule } from 'primeng/accordion';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [ HomeRoutingModule, AccordionModule ],
  declarations: [ HomeComponent ],
  providers: [],
  exports: []
})
export class HomeModule {}
