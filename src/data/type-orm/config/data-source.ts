import path from 'path';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
    type: 'mysql',
    host: 'database',
    port: 3306,
    username: 'masteruser',
    password: process.env.DATABASE_PASSWORD,
    database: 'clinplus',
    entities: [path.join(__dirname, '..', 'entities/*.ts')],
    logging: false,
    synchronize: false,
});
