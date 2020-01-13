import { Controller, Get, Param, Put, Post, Delete, Logger } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

  private logger: Logger;

  constructor(private readonly messagesService: MessagesService) {
    this.logger = new Logger('MessagesController');
  }

  // @Put()
  @Get('put')
  inserir() {
    return 'put';
  }

  // @Post()
  @Get('post')
  update() {
    return 'post';
  }

  // @Delete()
  @Get('delete')
  delete() {
    return 'delete';
  }

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
