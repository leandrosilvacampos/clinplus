import { Agreement } from './agreement';
import { Company } from './company';
import { Doctor } from './doctor';
import { Entity } from './entity';
import { Patient } from './patient';
import { Procedure } from './procedure';

export interface ISchedulingProps {
    startDate: Date;
    endDate: Date;
    status: 'scheduled' | 'completed' | 'canceled';
    procedures?: Procedure[];
    agreement?: Agreement;
    company?: Company;
    doctor?: Doctor;
    patient?: Patient;
    reason?: string;
}

export class Scheduling extends Entity<ISchedulingProps> {
    constructor(props: ISchedulingProps, id?: number) {
        super(props, id);
    }

    get startDate(): Date {
        return this.props.startDate;
    }

    get endDate(): Date {
        return this.props.endDate;
    }

    get procedures(): Procedure[] | undefined {
        return this.props.procedures;
    }

    get company(): Company | undefined {
        return this.props.company;
    }

    get status(): 'scheduled' | 'completed' | 'canceled' {
        return this.props.status;
    }
}
