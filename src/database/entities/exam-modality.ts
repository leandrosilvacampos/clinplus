import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base';
import { ProcedureEntity } from './procedure';

@Entity('examModality')
export class ExamModalityEntity extends BaseEntity {
    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(() => ProcedureEntity, (procedure) => procedure.examModality)
    exams: ProcedureEntity[];
}
