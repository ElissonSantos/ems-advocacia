import { Injectable, Logger } from '@nestjs/common';

import { Cliente, ClienteResource } from 'src/models/cliente.model';
import { GenericDA } from 'src/shared/generic';

@Injectable()
export class ClientesService {

  private logger: Logger;
  private tableName: string;
  private schemaName: string;

  constructor(private readonly genericDA: GenericDA) {
    this.logger = new Logger('ClientesService');
    this.tableName = 'clientes';
    this.schemaName = 'emsadv';
  }

  insert(cliente: Cliente): Promise<any> {
    return this.genericDA.genericInsert(
      [
        // Colunas que serao inseridas
        'cli_id',
        'cli_nome',
        'cli_rg',
        'cli_cpf',
        'cli_fone',
        'cli_fone1',
      ],
      [
        // Valores que serao inseridos
        `'${cliente.cli_id}'`,
        `'${cliente.cli_nome}'`,
        `'${cliente.cli_rg}'`,
        `'${cliente.cli_cpf}'`,
        `'${cliente.cli_fone}'`,
        `'${cliente.cli_fone1}'`,
      ],
      this.schemaName,
      this.tableName,
    );
  }

  update(cliente: Cliente): Promise<any> {
    return this.genericDA.genericUpdate(
      cliente.cli_id,
      'cli_id',
      [
        // Colunas que serao inseridas
        'cli_nome',
        'cli_rg',
        'cli_cpf',
        'cli_fone',
        'cli_fone1',
      ],
      [
        // Valores que serao inseridos
        `'${cliente.cli_nome}'`,
        `'${cliente.cli_rg}'`,
        `'${cliente.cli_cpf}'`,
        `'${cliente.cli_fone}'`,
        `'${cliente.cli_fone1}'`,
      ],
      this.schemaName,
      this.tableName,
    );
  }

  delete(id: string): Promise<any> {
    return this.genericDA.genericDelete(id, 'cli_id', this.schemaName, this.tableName);
  }

  list() {
    return this.genericDA.genericSelect(
      ['*'],
      this.schemaName,
      this.tableName,
    );
  }

  read(id: string): Promise<any> {
    return this.genericDA.genericSelect(
      ['*'],
      this.schemaName,
      this.tableName,
      'cli_id',
      id,
    );
  }

  convertResourceToDomain(resource: ClienteResource): Cliente {
    let cliente: Cliente;
    if (resource) {
      cliente = {
        cli_id: resource.id,
        cli_nome: resource.nome,
        cli_rg: resource.rg,
        cli_cpf: resource.cpf,
        cli_fone: resource.fone,
        cli_fone1: resource.fone1,
      };
    }
    return cliente;
  }

  convertDomainToResource(domain: Cliente): ClienteResource {
    let clienteResource: ClienteResource;

    if (domain) {
      clienteResource = {
        id: domain.cli_id,
        nome: domain.cli_nome,
        rg: domain.cli_rg,
        cpf: domain.cli_cpf,
        fone: domain.cli_fone,
        fone1: domain.cli_fone1,
      };
    }
    return clienteResource;
  }
}
