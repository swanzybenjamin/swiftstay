import { Injectable, Logger } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

@Injectable()
export class DBService {
  private connection: mysql.Connection;
  private readonly logger = new Logger(DBService.name);

  constructor() {
    this.connect();
  }

  private async connect() {
    try {
      this.connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT, 10),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
      });

      this.logger.log('Database connected successfully');
    } catch (error) {
      this.logger.error('Error connecting to the database', error);
    }
  }

  async query(sql: string, values?: any): Promise<any> {
    const [rows, fields] = await this.connection.execute(sql, values);
    return rows;
  }
}
