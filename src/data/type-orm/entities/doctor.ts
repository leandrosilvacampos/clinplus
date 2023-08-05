import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from './base';
import { PersonEntity } from './person';
import { SchedulingEntity } from './scheduling';
import { SpecialtyEntity } from './specialty';

@Entity('doctor')
export class DoctorEntity extends BaseEntity {
    @Column()
    crm: string;

    @OneToOne(() => PersonEntity)
    @JoinColumn()
    person: PersonEntity;

    @OneToMany(() => SchedulingEntity, (scheduling) => scheduling.doctor)
    schedules: SchedulingEntity[];

    @ManyToOne(() => SpecialtyEntity, (specialty) => specialty.doctors)
    specialty: SpecialtyEntity;
}
