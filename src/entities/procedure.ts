import { Entity } from './entity';
import { Scheduling } from './scheduling';

export interface IProcedureProps {
    name: string;
    durationTimeUnit: 'minutes' | 'hours' | 'days';
    durationTime: number;
    type: 'consultation' | 'exam';
    examModality?: unknown;
    specialty?: unknown;
    schedules?: Scheduling[];
}

export class Procedure extends Entity<IProcedureProps> {
    constructor(props: IProcedureProps, id?: number) {
        super(props, id);
    }
}
