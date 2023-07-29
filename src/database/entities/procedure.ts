import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from './base';
import { CompanyEntity } from './company';
import { ExamModalityEntity } from './exam-modality';
import { SpecialtyEntity } from './specialty';
import { SchedulingEntity } from './scheduling';

@Entity('procedure')
export class ProcedureEntity extends BaseEntity {
    @Column()
    name: string;

    @Column({
        type: 'enum',
        enum: ['minutes', 'hours', 'days'],
    })
    durationTimeUnit: 'minutes' | 'hours' | 'days';

    @Column({
        type: 'enum',
        enum: ['consultation', 'exam'],
    })
    type: 'consultation' | 'exam';

    @ManyToOne(() => CompanyEntity, (company) => company.procedures)
    company: CompanyEntity;

    @ManyToOne(() => ExamModalityEntity, (examModality) => examModality.exams)
    examModality?: ExamModalityEntity | null;

    @ManyToOne(() => SpecialtyEntity, (specialty) => specialty.consultations)
    specialty: SpecialtyEntity | null;

    @ManyToMany(() => SchedulingEntity, (scheduling) => scheduling.procedures)
    schedules: SchedulingEntity[];
}
