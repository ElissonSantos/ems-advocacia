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

  genericUpdate(
    id: string, nameColumn: string, columns: any[], values: any[], schemaName: string, tableName: string
  ) {
    let updateQuery = `UPDATE ${schemaName}.${tableName} SET`;
    for (let i = 0; i < columns.length; i++) {
      updateQuery += ` ${columns[i]} = ${values[i]}`;
      if (columns[i + 1]) {
        updateQuery += ','
      }
    }
    updateQuery += ` WHERE ${nameColumn} = ${id}`;

    console.log(updateQuery);
    return this.connection.query(updateQuery);
  }

  genericDelete(id: string, namesColumns: string[], schemaName: string, tableName: string) {
    let deleteQuery = `UPDATE ${schemaName}.${tableName} SET`;
    deleteQuery += ` ${namesColumns[0]} = false `;
    deleteQuery += ` WHERE ${namesColumns[1]} = ${id}`;

    console.log(deleteQuery);
    return this.connection.query(deleteQuery);
  }

  genericSelect(columns: any[], schemaName: string, tableName: string, whereColumns?: string, predicates?: string) {
    let selectQuery = `SELECT ${columns} FROM ${schemaName}.${tableName}`;
    if (predicates) {
      selectQuery += ` WHERE ${whereColumns} = '${predicates}'`;
      selectQuery += ` AND cli_a = true`;
    } else {
      selectQuery += ` WHERE cli_a = true`;
    }

    console.log(selectQuery);
    return this.connection.query(selectQuery);
  }
}
