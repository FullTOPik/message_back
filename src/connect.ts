import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import {
  TYPEORM_HOST,
  TYPEORM_PASSWORD,
  TYPEORM_PORT,
  TYPEORM_USERNAME,
  TYPEORM_TYPE_DATABASE,
} from './config/config';
import { Token } from './token/models/token.model';
import { User } from './users/models/user.model';

export const databaseConnectParams: TypeOrmModuleOptions = {
  type: TYPEORM_TYPE_DATABASE,
  host: TYPEORM_HOST,
  port: TYPEORM_PORT,
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_TYPE_DATABASE,
  entities: [User, Token],
  migrations: ['dist/migrations/*.js'],
};

export const source = new DataSource({
  type: TYPEORM_TYPE_DATABASE,
  host: TYPEORM_HOST,
  port: TYPEORM_PORT,
  username: TYPEORM_USERNAME,
  password: TYPEORM_PASSWORD,
  database: TYPEORM_TYPE_DATABASE,
  entities: ['dist/**/*.model.js'],
  migrationsTableName: 'migrations',
  migrations: ['dist/migrations/*.js'],
});
