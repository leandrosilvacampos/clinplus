import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base';
import { ProcedureEntity } from './procedure';
import { CompanyEntity } from './company';

@Entity('specialty')
export class SpecialtyEntity extends BaseEntity {
    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(() => CompanyEntity, (company) => company.specialties)
    company: CompanyEntity;

    @OneToMany(() => ProcedureEntity, (procedure) => procedure.specialty)
    consultations: ProcedureEntity[];
}
