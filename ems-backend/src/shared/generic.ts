import { Injectable, Logger } from '@nestjs/common';
import { getConnection } from 'typeorm';

@Injectable()
export class GenericDA {

  public logger: Logger;

  constructor() {
    this.logger = new Logger('GenericDA');
  }

  genericInsert(columns: any[], values: any[], schemaName: string, tableName: string) {
    const connection = getConnection();

    let insertQuery = `INSERT INTO ${schemaName}.${tableName}`;
    insertQuery += `(${columns})`;
    insertQuery += ` VALUES ${values}`;

    this.logger.log(insertQuery);

    return connection.query(insertQuery);
  }

  genericUpdate(id: string, nameColumn: string, columns: any[], values: any[], schemaName: string, tableName: string) {
    const connection = getConnection();

    let updateQuery = `UPDATE ${schemaName}.${tableName} SET `;
    for (let i = 0; i < columns.length; i++) {
      updateQuery += `${columns[i]} = '${values[i]}',`;
    }
    updateQuery += ` WHERE ${nameColumn} = ${id}`;

    this.logger.log(updateQuery);

    return connection.query(updateQuery);
  }

  genericDelete(id: string, nameColumn: string, schemaName: string, tableName: string) {
    const connection = getConnection();

    let deleteQuery = `DELETE FROM ${schemaName}.${tableName}`;
    deleteQuery += ` WHERE ${nameColumn} = ${id}`;

    return connection.query(deleteQuery);
  }

  genericSelect(columns: any[], schemaName: string, tableName: string, whereColumns?: string, predicates?: string) {
    const connection = getConnection();

    let selectQuery = `SELECT ${columns} FROM ${schemaName}.${tableName}`;

    if (predicates) {
      selectQuery += ` WHERE ${whereColumns} = '${predicates}'`;
    }

    this.logger.warn(selectQuery);

    return connection.query(selectQuery);
  }
}
