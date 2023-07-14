import { IPerson } from './person.interface';

export interface IUser {
    id: number;
    password: string;
    personId: number;
    person?: IPerson;
}
