import { IEntity } from './entity';
import { Scheduling } from './scheduling';

export interface IProcedureProps {
    name: string;
    durationTimeUnit: 'minutes' | 'hours' | 'days';
    type: 'consultation' | 'exam';
    company: unknown;
    examModality?: unknown;
    specialty: unknown;
    schedules: Scheduling[];
}

export class Procedure extends IEntity<IProcedureProps> {
    constructor(props: IProcedureProps, id?: number) {
        super(props, id);
    }
}
