import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base';

@Entity('paymentMethod')
export class PaymentMethodEntity extends BaseEntity {
    @Column()
    name: string;
}
