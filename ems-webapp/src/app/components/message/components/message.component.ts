import { Component, OnInit } from '@angular/core';

import { Message } from 'src/app/models/messages.model';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'ems-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages: Message[];
  cols: any[];

  constructor(private readonly messagesService: MessagesService) {
  }

  ngOnInit() {
    this.messagesService.getMessages()
      .subscribe(messages => {
        const messagesString = JSON.stringify(messages);
        this.messages = JSON.parse(messagesString);
      });

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }
}
