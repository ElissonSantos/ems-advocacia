import { Controller, Get, Param, Put, Post, Delete, Logger, Body, Query } from '@nestjs/common';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {

  private logger: Logger;

  constructor(private readonly clientesService: ClientesService) {
    this.logger = new Logger('ClientesController');
  }

  @Put()
  inserir(@Body() body: any) {
    return this.clientesService.insert(body)
      .then(() => {
        return;
      })
      .catch(err => {
        return err;
      });
  }

  @Post()
  update(@Body() body: any) {
    return this.clientesService.update(body)
      .then(() => {
        return;
      })
      .catch(err => {
        return err;
      });
  }

  @Delete()
  delete(@Query('id') id: string) {
    return this.clientesService.delete(id)
      .then(() => {
        return;
      })
      .catch(err => {
        return err;
      });
  }

  @Get()
  getClientes() {
    return this.clientesService.list()
      .then(result => {
        const retorno = [];
        result.forEach(cliente => {
          const clienteResource = this.clientesService.convertDomainToResource(cliente);
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
    return this.clientesService.read(id)
      .then(result => {
        const retorno = this.clientesService.convertDomainToResource(result[0]);
        return retorno;
      })
      .catch(err => {
        return err;
      });
  }
}
