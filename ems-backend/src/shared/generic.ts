import { Injectable, Logger } from '@nestjs/common';
import { Connection, getConnection } from 'typeorm';

@Injectable()
export class GenericDA {

  public logger: Logger;
  private connection: Connection;

  constructor() {
    this.logger = new Logger('GenericDA');
    this.connection = getConnection('emsdb');
  }

  async genericInsert(columns: any[], values: any[], schemaName: string, tableName: string) {
    let insertQuery = `INSERT INTO ${schemaName}.${tableName}`;
    insertQuery += `(${columns})`;
    insertQuery += ` VALUES (${values})`;

    console.log(insertQuery);
    return this.connection.query(insertQuery);
  }

  genericUpdate(id: string, nameColumn: string, columns: any[], values: any[], schemaName: string, tableName: string) {
    let updateQuery = `UPDATE ${schemaName}.${tableName} SET `;
    for (let i = 0; i < columns.length; i++) {
      updateQuery += `${columns[i]} = '${values[i]}',`;
    }
    updateQuery += ` WHERE ${nameColumn} = ${id}`;

    this.logger.log(updateQuery);
    return this.connection.query(updateQuery);
  }

  genericDelete(id: string, nameColumn: string, schemaName: string, tableName: string) {
    let deleteQuery = `DELETE FROM ${schemaName}.${tableName}`;
    deleteQuery += ` WHERE ${nameColumn} = ${id}`;

    return this.connection.query(deleteQuery);
  }

  genericSelect(columns: any[], schemaName: string, tableName: string, whereColumns?: string, predicates?: string) {
    let selectQuery = `SELECT ${columns} FROM ${schemaName}.${tableName}`;

    if (predicates) {
      selectQuery += ` WHERE ${whereColumns} = '${predicates}'`;
    }

    this.logger.warn(selectQuery);
    return this.connection.query(selectQuery);
  }
}
