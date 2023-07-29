import { IEntity } from './entity';

export interface IPersonProps {
    name?: string | null;
    companyName?: string | null;
    fantasyName?: string | null;
    type: 'individual' | 'company';
    dateOfBirth: string;
    gender: 'male' | 'female' | 'other';
    taxDocument: string;
    email: string;
    cellPhone: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    district: string;
}

export class Person extends IEntity<IPersonProps> {
    constructor(props: IPersonProps, id?: number) {
        super(props, id);
    }
}
