import { Controller, Get, Param, Put, Post, Delete, Logger } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

  private logger: Logger;

  constructor(private readonly messagesService: MessagesService) {
    this.logger = new Logger('MessagesController');
  }

  @Put()
  inserir() {}

  @Post()
  update() {}

  @Delete()
  delete() {}

  @Get()
  getMessages() {
    return this.messagesService.list()
      .then(resultado => {
        return resultado;
      });
  }

  @Get(':id')
  getMessage(@Param('id') id: number) {
    // return this.messagesService.getHello();
  }
}
