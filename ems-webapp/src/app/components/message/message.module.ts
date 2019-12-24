import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MessageComponent } from './components/message.component';
import { MessageRoutingModule } from './message-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MessageRoutingModule,
  ],
  declarations: [ MessageComponent ],
  providers: [],
  exports: []
})
export class MessageModule {}
