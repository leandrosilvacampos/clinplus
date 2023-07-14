import { EntitySchemaColumnOptions } from 'typeorm';

export const BaseEntitySchemaColumns = {
    id: {
        type: Number,
        primary: true,
        generated: true,
    } as EntitySchemaColumnOptions,
    createdAt: {
        type: 'timestamp',
        createDate: true,
    } as EntitySchemaColumnOptions,
    updatedAt: {
        type: 'timestamp',
        updateDate: true,
    } as EntitySchemaColumnOptions,
    deletedAt: {
        type: 'timestamp',
        deleteDate: true,
    } as EntitySchemaColumnOptions,
};
