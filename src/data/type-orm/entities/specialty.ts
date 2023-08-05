import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base';

import { DoctorEntity } from './doctor';

@Entity('specialty')
export class SpecialtyEntity extends BaseEntity {
    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @OneToMany(() => DoctorEntity, (doctor) => doctor.specialty)
    doctors: DoctorEntity[];
}
