import { Entity } from './entity';
import { Scheduling } from './scheduling';

export interface IAgreementProps {
    name: string;
    discountType: 'absolute' | 'percentage';
    discountValue: number;
    company: unknown;
    schedules: Scheduling[];
}

export class Agreement extends Entity<IAgreementProps> {
    constructor(props: IAgreementProps, id?: number) {
        super(props, id);
    }
}
