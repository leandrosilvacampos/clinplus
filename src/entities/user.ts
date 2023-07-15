import { IEntity } from './entity';
import { Person } from './person';

export interface IUserProps {
    password: string;
    personId: number;
    person?: Person;
}

export class User extends IEntity<IUserProps> {
    constructor(props: IUserProps, id?: number) {
        super(props, id);
    }
}
