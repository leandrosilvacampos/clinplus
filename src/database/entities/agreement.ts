import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base';
import { CompanyEntity } from './company';
import { SchedulingEntity } from './scheduling';

@Entity('agreement')
export class AgreementEntity extends BaseEntity {
    @Column()
    name: string;

    @Column({
        type: 'enum',
        enum: ['absolute', 'percentage'],
    })
    discountType: 'absolute' | 'percentage';

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    discountValue: number;

    @ManyToOne(() => CompanyEntity, (company) => company.agreements)
    company: CompanyEntity;

    @OneToMany(() => SchedulingEntity, (scheduling) => scheduling.agreement)
    schedules: SchedulingEntity[];
}
