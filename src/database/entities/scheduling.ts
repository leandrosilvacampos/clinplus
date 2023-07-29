import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from './base';
import { ProcedureEntity } from './procedure';
import { AgreementEntity } from './agreement';
import { CompanyEntity } from './company';
import { DoctorEntity } from './doctor';
import { PatientEntity } from './patient';

@Entity('scheduling')
export class SchedulingEntity extends BaseEntity {
    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @ManyToMany(() => ProcedureEntity, (procedure) => procedure.schedules)
    @JoinTable({ name: 'schedulingProcedure' })
    procedures: ProcedureEntity[];

    @ManyToOne(() => AgreementEntity, (agreement) => agreement.schedules)
    agreement: AgreementEntity;

    @ManyToOne(() => CompanyEntity, (company) => company.schedules)
    company: CompanyEntity;

    @ManyToOne(() => DoctorEntity, (doctor) => doctor.schedules)
    doctor: DoctorEntity;

    @ManyToOne(() => PatientEntity, (patient) => patient.schedules)
    patient: PatientEntity;
}
