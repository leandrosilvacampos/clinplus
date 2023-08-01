import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base';
import { ProcedureEntity } from './procedure';
import { SchedulingEntity } from './scheduling';
import { PersonEntity } from './person';
import { AgreementEntity } from './agreement';
import { PaymentMethodEntity } from './payment-method';

@Entity('company')
export class CompanyEntity extends BaseEntity {
    @Column()
    companyName: string;

    @Column()
    fantasyName: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    phone: string;

    @Column({ nullable: true })
    cellPhone: string;

    @Column()
    streetAddress: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    zipCode: string;

    @Column()
    district: string;

    @ManyToMany(() => PaymentMethodEntity)
    @JoinTable({ name: 'companyPaymentMethod' })
    paymentMethods: PaymentMethodEntity[];

    @ManyToOne(() => CompanyEntity, (company) => company.subsidiaries)
    parentCompany: CompanyEntity;

    @OneToMany(() => CompanyEntity, (company) => company.parentCompany)
    subsidiaries: CompanyEntity[];

    @OneToMany(() => ProcedureEntity, (procedure) => procedure.company)
    procedures: ProcedureEntity[];

    @OneToMany(() => SchedulingEntity, (scheduling) => scheduling.company)
    schedules: SchedulingEntity[];

    @OneToMany(() => PersonEntity, (person) => person.company)
    people: PersonEntity[];

    @OneToMany(() => AgreementEntity, (agreement) => agreement.company)
    agreements: AgreementEntity[];
}
