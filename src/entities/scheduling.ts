import { IEntity } from './entity';
import { Procedure } from './procedure';

export interface ISchedulingProps {
    startDate: Date;
    endDate: Date;
    procedures: Procedure[];
    agreement: unknown;
    company: unknown;
}

export class Scheduling extends IEntity<ISchedulingProps> {
    constructor(props: ISchedulingProps, id?: number) {
        super(props, id);
    }
}
