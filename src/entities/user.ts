import { Entity } from './entity';
import { Person } from './person';

export interface IUserProps {
    password: string;
    person?: Person;
}

export class User extends Entity<IUserProps> {
    constructor(props: IUserProps, id?: number) {
        super(props, id);
    }

    get password(): string {
        return this.props.password;
    }

    get person(): Person | undefined {
        return this.props.person;
    }
}
