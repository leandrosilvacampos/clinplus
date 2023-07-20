import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base';
import { ProcedureEntity } from './procedure';

@Entity('company')
export class CompanyEntity extends BaseEntity {
    @Column()
    companyName: string;

    @Column()
    fantasyName: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
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

    @ManyToOne(() => CompanyEntity, (company) => company.subsidiaries)
    parentCompany: CompanyEntity;

    @OneToMany(() => CompanyEntity, (company) => company.parentCompany)
    subsidiaries: CompanyEntity[];

    @OneToMany(() => ProcedureEntity, (procedure) => procedure.company)
    procedures: ProcedureEntity[];
}
