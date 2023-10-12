import path from 'path';
import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
    type: 'mysql',
    host: 'database',
    port: 3306,
    username: 'root',
    password: '',
    database: 'clinplus',
    entities: [path.join(__dirname, '..', 'entities/*.ts')],
    logging: false,
    synchronize: false,
});
