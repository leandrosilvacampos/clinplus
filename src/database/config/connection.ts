import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
    type: 'mysql',
    host: 'database',
    port: 3306,
    username: 'root',
    password: '',
    database: 'clinplus',
    entities: ['src/database/entities/*.ts'],
    logging: true,
    synchronize: true,
});
