import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from './base';
import { CompanyEntity } from './company';

@Entity('paymentMethod')
export class PaymentMethodEntity extends BaseEntity {
    @Column()
    name: string;

    @ManyToMany(() => CompanyEntity, (company) => company.paymentMethods)
    @JoinTable({ name: 'companyPaymentMethod' })
    companies: CompanyEntity[];
}
