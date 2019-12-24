import { Injectable, Logger } from '@nestjs/common';
import * as moment from 'moment';

import { Message, MessageResource } from '../../models/messages.model';
import { getConnection } from 'typeorm';

@Injectable()
export class MessagesService {

  private logger: Logger;

  constructor() {
    this.logger = new Logger('MessagesService');
  }

  insert(message: Message): Promise<any> {
    return null;
    // return this.genericInsert(
    //   [
    //     // Colunas que serao inseridas
    //     'dataInit',
    //     'dataFim',
    //     'tituloMessages',
    //     'textoMessages',
    //   ],
    //   [
    //     // Valores que serao inseridos
    //     `'${message.dataInicio}'`,
    //     `'${message.dataFim}'`,
    //     `'${message.titulo}'`,
    //     `'${message.texto}'`,
    //   ],
    // );
  }

  update(message: Message): Promise<any> {
    return null;
    // return this.genericUpdate(
    //   'idmessages',
    //   message.id,
    //   [
    //     // Colunas que serao alteradas
    //     {
    //       name: 'dataInit',
    //       value: message.dataInicio,
    //     },
    //     {
    //       name: 'dataFim',
    //       value: message.dataFim,
    //     },
    //     {
    //       name: 'tituloMessages',
    //       value: message.titulo,
    //     },
    //     {
    //       name: 'textoMessages',
    //       value: message.texto,
    //     },
    //   ],
    // );
  }

  delete(uuid: string): Promise<any> {
    return null;
    // return this.genericDelete('idmessages', uuid);
  }

  async list() {
    const connection = getConnection();
    const query = 'SELECT * FROM emsadv.messages;';
    return connection.query(query);
  }

  read(uuid: string): Promise<any> {
    return null;
    // const predicates: dbutils.Predicate[] = [
    //   {
    //     name: 'idmessages',
    //     value: uuid,
    //     operador: dbutils.Operator.equal,
    //   },
    // ];
    // return this.genericRead(['*'], predicates);
  }

  convertResourceToDomain(resource: MessageResource): Message {
    let message: Message;
    if (resource) {
      message = {
        mes_titulo: resource.titulo,
        mes_texto: resource.texto,
        mes_id: resource.id,
      };
      if (resource.dataInicio) {
        const formatada = moment(resource.dataInicio).format('YYYY-MM-DD HH:mm:ss');
        message.mes_datainit = moment(formatada).toDate();
      }
      if (resource.dataFim) {
        const formatada = moment(resource.dataFim).format('YYYY-MM-DD HH:mm:ss');
        message.mes_dataend = moment(formatada).toDate();
      }
    }
    return message;
  }

  convertDomainToResource(domain: Message): MessageResource {
    let messageResource: MessageResource;

    if (domain) {
      messageResource = {
        id: domain.mes_id,
        titulo: domain.mes_titulo,
        texto: domain.mes_texto,
        dataInicio: domain.mes_datainit,
        dataFim: domain.mes_dataend,
      };
    }

    return messageResource;
  }
}
