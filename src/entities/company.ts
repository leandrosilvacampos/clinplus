import { Entity } from './entity';
import { Procedure } from './procedure';
import { Scheduling } from './scheduling';

export interface ICompanyProps {
    companyName: string;
    fantasyName: string;
    email?: string;
    phone?: string;
    cellPhone?: string;
    streetAddress?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    district?: string;
    parentCompany?: Company;
    subsidiaries?: Company[];
    procedures?: Procedure[];
    schedules?: Scheduling[];
}

export class Company extends Entity<ICompanyProps> {
    constructor(props: ICompanyProps, id?: number) {
        super(props, id);
    }

    get fantasyName(): string {
        return this.props.fantasyName;
    }

    get companyName(): string {
        return this.props.companyName;
    }
}
