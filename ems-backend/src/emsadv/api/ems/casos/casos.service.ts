import { Injectable, Logger } from '@nestjs/common';

import { Caso, CasoResource } from 'src/models/caso.model';
import { GenericDA } from 'src/shared/generic';

@Injectable()
export class CasosService {

  private logger: Logger;
  private tableName: string;
  private schemaName: string;

  constructor(private readonly genericDA: GenericDA) {
    this.logger = new Logger('CasosService');
    this.tableName = 'casos';
    this.schemaName = 'emsadv';
  }

  insert(caso: Caso): Promise<any> {
    return this.genericDA.genericInsert(
      [
        // Colunas que serao inseridas
        'cli_id',
        'ca_area',
        'ca_numero',
        'ca_add',
      ],
      [
        // Valores que serao inseridos
        `'${caso.cli_id}'`,
        `'${caso.ca_area}'`,
        `'${caso.ca_numero}'`,
        `'${caso.ca_add}'`,
      ],
      this.schemaName,
      this.tableName,
    );
  }

  update(caso: Caso): Promise<any> {
    return this.genericDA.genericUpdate(
      caso.ca_id,
      'ca_id',
      [
        // Colunas que serao inseridas
        'cli_id',
        'ca_area',
        'ca_numero',
        'ca_add',
      ],
      [
        // Valores que serao inseridos
        `'${caso.cli_id}'`,
        `'${caso.ca_area}'`,
        `'${caso.ca_numero}'`,
        `'${caso.ca_add}'`,
      ],
      this.schemaName,
      this.tableName,
    );
  }

  delete(id: string): Promise<any> {
    return this.genericDA.genericDelete(id, 'ca_id', this.schemaName, this.tableName);
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
      'ca_id',
      id,
    );
  }

  convertResourceToDomain(resource: CasoResource): Caso {
    let caso: Caso;
    if (resource) {
      caso = {
        ca_id: resource.id,
        cli_id: resource.clienteid,
        ca_area: resource.area,
        ca_numero: resource.numero,
        ca_add: resource.add,
      };
    }
    return caso;
  }

  convertDomainToResource(domain: Caso): CasoResource {
    let casoResource: CasoResource;

    if (domain) {
      casoResource = {
        id: domain.ca_id,
        clienteid: domain.cli_id,
        area: domain.ca_area,
        numero: domain.ca_numero,
        add: domain.ca_add,
      };
    }
    return casoResource;
  }
}
