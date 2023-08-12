import { Entity } from './entity';

export interface IPaymentMethodProps {
    name: string;
}

export class PaymentMethod extends Entity<IPaymentMethodProps> {
    constructor(props: IPaymentMethodProps, id?: number) {
        super(props, id);
    }

    get name(): string {
        return this.props.name;
    }
}
