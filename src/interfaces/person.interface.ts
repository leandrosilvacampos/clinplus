import { IUser } from './user.interface';

export interface IPerson {
    id: number;
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
    crm?: string | null;
    observations?: string | null;
    user?: IUser;
}
