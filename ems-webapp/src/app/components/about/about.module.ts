import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './components/about.component';
import { AboutRoutingModule } from './about-routing.module';

@NgModule({
  imports: [ CommonModule, AboutRoutingModule ],
  providers: [],
  exports: [],
  declarations: [ AboutComponent ]
})
export class AboutModule {}
