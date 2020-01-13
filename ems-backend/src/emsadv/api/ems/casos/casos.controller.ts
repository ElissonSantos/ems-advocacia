import { Controller, Get, Param, Put, Post, Delete, Logger, Body, Query } from '@nestjs/common';

import { CasosService } from './casos.service';

@Controller('casos')
export class CasosController {

  private logger: Logger;

  constructor(private readonly casosService: CasosService) {
    this.logger = new Logger('CasosController');
  }

  @Put()
  inserir(@Body() body: any) {
    return this.casosService.insert(body)
      .then(() => {
        return;
      })
      .catch(err => {
        return err;
      });
  }

  @Post()
  update(@Body() body: any) {
    return this.casosService.update(body)
      .then(() => {
        return;
      })
      .catch(err => {
        return err;
      });
  }

  @Delete()
  delete(@Query('id') id: string) {
    return this.casosService.delete(id)
      .then(() => {
        return;
      })
      .catch(err => {
        return err;
      });
  }

  @Get()
  getClientes() {
    return this.casosService.list()
      .then(result => {
        const retorno = [];
        result.forEach(cliente => {
          const clienteResource = this.casosService.convertDomainToResource(cliente);
          retorno.push(clienteResource);
        });
        return retorno;
      })
      .catch(err => {
        return err;
      });
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    return this.casosService.read(id)
      .then(result => {
        const retorno = this.casosService.convertDomainToResource(result[0]);
        return retorno;
      })
      .catch(err => {
        return err;
      });
  }
}
