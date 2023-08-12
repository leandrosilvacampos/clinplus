import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from './base';
import { PersonEntity } from './person';
import { SchedulingEntity } from './scheduling';

@Entity('patient')
export class PatientEntity extends BaseEntity {
    @Column({ nullable: true })
    observations: string;

    @OneToOne(() => PersonEntity)
    @JoinColumn()
    person: PersonEntity;

    @OneToMany(() => SchedulingEntity, (scheduling) => scheduling.patient)
    schedules: SchedulingEntity[];
}
