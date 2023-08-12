import { Agreement } from './agreement';
import { Company } from './company';
import { Doctor } from './doctor';
import { Entity } from './entity';
import { Patient } from './patient';
import { Procedure } from './procedure';

export interface ISchedulingProps {
    startDate: Date;
    endDate: Date;
    procedures?: Procedure[];
    agreement?: Agreement;
    company?: Company;
    doctor?: Doctor;
    patient?: Patient;
}

export class Scheduling extends Entity<ISchedulingProps> {
    constructor(props: ISchedulingProps, id?: number) {
        super(props, id);
    }
}
