import { IPerson } from '@/interfaces/person.interface';
import { EntitySchema } from 'typeorm';
import { BaseEntitySchemaColumns } from '../config/baseEntitySchemaColumns';

export const PersonEntitySchema = new EntitySchema<IPerson>({
    name: 'person',
    columns: {
        ...BaseEntitySchemaColumns,
        name: {
            type: String,
            default: null,
        },
        companyName: {
            type: String,
            default: null,
        },
        fantasyName: {
            type: Number,
            default: null,
        },
        type: {
            type: 'enum',
            enum: ['individual', 'company'],
        },
        dateOfBirth: {
            type: 'date',
        },
        gender: {
            type: 'enum',
            enum: ['male', 'female', 'other'],
        },
        taxDocument: {
            type: String,
        },
        email: {
            type: String,
        },
        cellPhone: {
            type: String,
        },
        streetAddress: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        zipCode: {
            type: String,
        },
        district: {
            type: String,
        },
        crm: {
            type: String,
            default: null,
        },
        observations: {
            type: String,
            default: null,
        },
    },
    relations: {
        user: {
            type: 'one-to-one',
            target: 'user',
            cascade: true,
        },
    },
});
