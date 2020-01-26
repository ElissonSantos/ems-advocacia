import { Controller, Get, Param, Put, Post, Delete, Logger, Body, Query } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClienteResource } from 'src/models/cliente.model';

@Controller('clientes')
export class ClientesController {

  private logger: Logger;

  constructor(private readonly clientesService: ClientesService) {
    this.logger = new Logger('ClientesController');
  }

  @Post()
  inserir(@Body() body: any) {
    return this.clientesService.insert(body)
      .then(() => {
        return;
      })
      .catch(err => {
        return err;
      });
  }

  @Put()
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
  delete(@Query('idCliente') idCliente: string) {
    return this.clientesService.delete(idCliente)
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
        const retorno: ClienteResource[] = [];
        result.forEach(cliente => {
          const clienteResource = this.clientesService.convertDomainToResource(cliente);
          retorno.push(clienteResource);
        });
        return retorno;
      })
      .catch(err => {
        return 'Erro: ' + err;
      });
  }

  @Get(':id')
  getCliente(@Param('id') id: string) {
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
