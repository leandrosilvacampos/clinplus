import { Entity } from './entity';
import { Person } from './person';

export interface IUserProps {
    password: string;
    personId: number;
    person?: Person;
}

export class User extends Entity<IUserProps> {
    constructor(props: IUserProps, id?: number) {
        super(props, id);
    }
}
