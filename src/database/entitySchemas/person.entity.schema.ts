import { EntitySchema } from 'typeorm';

export const PersonEntitySchema = new EntitySchema({
    name: 'person',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        name: {
            type: String,
        },
    },
});
