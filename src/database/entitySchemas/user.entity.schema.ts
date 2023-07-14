import { EntitySchema } from 'typeorm';
import { BaseEntitySchemaColumns } from '../config/baseEntitySchemaColumns';
import { IUser } from '@/interfaces/user.interface';

export const UserEntitySchema = new EntitySchema<IUser>({
    name: 'user',
    columns: {
        ...BaseEntitySchemaColumns,
        password: {
            type: String,
        },
    },
    relations: {
        person: {
            type: 'one-to-one',
            target: 'person',
            joinColumn: {
                name: 'personId',
                referencedColumnName: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
    },
});
