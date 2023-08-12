import { Entity } from './entity';

export interface IAgreementProps {
    name: string;
    discountType: 'absolute' | 'percentage';
    discountValue: number;
}

export class Agreement extends Entity<IAgreementProps> {
    constructor(props: IAgreementProps, id?: number) {
        super(props, id);
    }

    get name(): string {
        return this.props.name;
    }

    get discountType(): 'absolute' | 'percentage' {
        return this.props.discountType;
    }

    get discountValue(): number {
        return this.props.discountValue;
    }
}
