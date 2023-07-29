import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base';
import { ProcedureEntity } from './procedure';
import { CompanyEntity } from './company';

@Entity('examModality')
export class ExamModalityEntity extends BaseEntity {
    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(() => CompanyEntity, (company) => company.examModalities)
    company: CompanyEntity;

    @OneToMany(() => ProcedureEntity, (procedure) => procedure.examModality)
    exams: ProcedureEntity[];
}
