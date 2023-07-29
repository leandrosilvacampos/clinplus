import { IEntity } from './entity';
import { Procedure } from './procedure';
import { Scheduling } from './scheduling';

export interface ICompanyProps {
    companyName: string;
    fantasyName: string;
    email: string;
    phone: string;
    cellPhone: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    district: string;
    parentCompany: Company;
    subsidiaries: Company[];
    procedures: Procedure[];
    examModalities: string[];
    specialties: string[];
    schedules: Scheduling[];
}

export class Company extends IEntity<ICompanyProps> {
    constructor(props: ICompanyProps, id?: number) {
        super(props, id);
    }
}
