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
    if (!cliente.cli_cnpj) {
      cliente.cli_cnpj = 0;
    } else {
      cliente.cli_rg = 0; cliente.cli_cpf = 0;
    }
    if (!cliente.cli_fone1) { cliente.cli_fone1 = 0; }
    return this.genericDA.genericInsert(
      [
        // Colunas que serao inseridas
        'cli_nome',
        'cli_email',
        'cli_rg',
        'cli_cpf',
        'cli_cnpj',
        'cli_fone',
        'cli_fone1',
        'cli_endereco',
        'cli_a'
      ],
      [
        // Valores que serao inseridos
        `'${cliente.cli_nome}'`,
        `'${cliente.cli_email}'`,
        `'${cliente.cli_rg}'`,
        `'${cliente.cli_cpf}'`,
        `'${cliente.cli_cnpj}'`,
        `'${cliente.cli_fone}'`,
        `'${cliente.cli_fone1}'`,
        `'${cliente.cli_endereco}'`,
        true
      ],
      this.schemaName,
      this.tableName,
    );
  }

  update(cliente: Cliente): Promise<any> {
    let columns: string[] = [];
    let values: string[] = [];

    if (cliente.cli_nome) {
      columns.push('cli_nome');
      values.push(`'${cliente.cli_nome}'`);
    }
    if (cliente) {
      columns.push('cli_email');
      values.push(`'${cliente.cli_email}'`);
    }
    if (cliente) {
      columns.push('cli_rg');
      values.push(`'${cliente.cli_rg}'`);
    }
    if (cliente) {
      columns.push('cli_cpf');
      values.push(`'${cliente.cli_cpf}'`);
    }
    if (cliente) {
      columns.push('cli_fone');
      values.push(`'${cliente.cli_fone}'`);
    }
    if (cliente) {
      columns.push('cli_fone1');
      values.push(`'${cliente.cli_fone1}'`);
    }
    if (cliente) {
      columns.push('cli_endereco');
      values.push(`'${cliente.cli_endereco}'`);
    }

    return this.genericDA.genericUpdate(
      cliente.cli_id,
      'cli_id',
      columns,
      values,
      this.schemaName,
      this.tableName,
    );
  }

  delete(id: string): Promise<any> {
    const columns = ['cli_a', 'cli_id'];
    return this.genericDA.genericDelete(id, columns, this.schemaName, this.tableName);
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
        cli_email: resource.email,
        cli_rg: resource.rg,
        cli_cpf: resource.cpf,
        cli_cnpj: resource.cnpj,
        cli_fone: resource.fone,
        cli_fone1: resource.fone1,
        cli_endereco: resource.endereco,
        cli_a: resource.a,
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
        email: domain.cli_email,
        rg: domain.cli_rg,
        cpf: domain.cli_cpf,
        cnpj: domain.cli_cnpj,
        fone: domain.cli_fone,
        fone1: domain.cli_fone1,
        endereco: domain.cli_endereco,
        a: domain.cli_a,
      };
    }
    return clienteResource;
  }
}
