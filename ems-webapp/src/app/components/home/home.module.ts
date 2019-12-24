import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { FullCalendarModule } from 'primeng/fullcalendar';

import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AccordionModule,
    FullCalendarModule
  ],
  declarations: [ HomeComponent ],
  providers: [],
  exports: []
})
export class HomeModule {}
