import { Component, OnInit } from '@angular/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { Message } from '../../../models/messages.model';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'ems-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mensagens: any;
  events: any[];
  options: any;

  constructor(private readonly messagesService: MessagesService) {
  }

  ngOnInit() {
    this.messagesService.getMessages()
      .subscribe(messages => {
        this.mensagens = messages;
        console.log(this.mensagens);
      });

    this.events = [
      {
        title: 'All Day Event',
        start: '2016-01-01'
      },
      {
        title: 'Long Event',
        start: '2016-01-07',
        end: '2016-01-10'
      },
      {
        title: 'Repeating Event',
        start: '2016-01-09T16:00:00'
      },
      {
        title: 'Repeating Event',
        start: '2016-01-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2016-01-11',
        end: '2016-01-13'
      }
    ];

    this.options = {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      defaultDate: '2017-02-01',
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      editable: true
    };
  }
}
