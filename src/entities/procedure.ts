import { Entity } from './entity';
import { Scheduling } from './scheduling';

export interface IProcedureProps {
    name: string;
    durationTimeUnit: 'minutes' | 'hours';
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

    get name(): string {
        return this.props.name;
    }

    get durationTimeUnit(): 'minutes' | 'hours' {
        return this.props.durationTimeUnit;
    }

    get durationTime(): number {
        return this.props.durationTime;
    }

    get type(): 'consultation' | 'exam' {
        return this.props.type;
    }

    get durationTimeInMinutes(): number {
        return this.durationTimeUnit === 'hours' ? this.durationTime * 60 : this.durationTime;
    }
}
