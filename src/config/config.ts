import { config } from 'dotenv';

config();

type databaseType = 'postgres' | 'mysql' | 'mariadb' | 'mongodb';

export const PORT = Number(process.env.PORT) || 8000;

export const TYPEORM_HOST =  process.env.TYPEORM_HOST || 'localhost';
export const TYPEORM_PORT = Number(process.env.TYPEORM_PORT) || 5432;
export const TYPEORM_USERNAME = process.env.TYPEORM_USERNAME;
export const TYPEORM_PASSWORD = process.env.TYPEORM_PASSWORD;
export const TYPEORM_TYPE_DATABASE: databaseType  = process.env.TYPEORM_TYPE_DATABASE as databaseType;

export const ACCESS_SECRET = process.env.ACCESS_SECRET;
export const REFRESH_SECRET = process.env.REFRESH_SECRET;
export const ACCESS_EXPIRES_IN = process.env.ACCESS_EXPIRES_IN;
export const REFRESH_EXPIRES_IN = process.env.REFRESH_EXPIRES_IN;
export const MAX_AGE_ACCESS = Number(process.env.MAX_AGE_ACCESS);
export const MAX_AGE_REFRESH = Number(process.env.MAX_AGE_RESRESH);
