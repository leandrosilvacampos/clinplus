import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base';
import { CompanyEntity } from './company';

@Entity('procedure')
export class ProcedureEntity extends BaseEntity {
    @Column()
    name: string;

    @Column()
    durationTimeUnit: 'minutes' | 'hours' | 'days';

    @Column()
    type: 'consultation' | 'exam';

    @ManyToOne(() => CompanyEntity, (company) => company.procedures)
    company: CompanyEntity;
}
