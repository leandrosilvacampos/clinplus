import { dataSource } from '@/data/type-orm/config/data-source';
import { PatientEntity } from '@/data/type-orm/entities/patient';
import { SchedulingEntity } from '@/data/type-orm/entities/scheduling';
import { UserEntity } from '@/data/type-orm/entities/user';
import { Company } from '@/entities/company';
import { Procedure } from '@/entities/procedure';
import { Scheduling } from '@/entities/scheduling';
import { ICreateScheduleRepositoryDTO } from '@/interfaces/scheduling';
import { ISchedulingRepository } from '@/repositories/scheduling';
import { Repository } from 'typeorm';

export class TypeORMSchedulingRepository implements ISchedulingRepository {
    async create(scheduling: ICreateScheduleRepositoryDTO): Promise<Scheduling> {
        const patientRepository: Repository<PatientEntity> = dataSource.getRepository(PatientEntity);

        const schedulingRepository: Repository<SchedulingEntity> = dataSource.getRepository(SchedulingEntity);

        const userRepository: Repository<UserEntity> = dataSource.getRepository(UserEntity);

        const { userId } = scheduling;

        const user: UserEntity | null = await userRepository.findOne({
            where: {
                id: userId,
            },
            relations: {
                person: true,
            },
        });

        if (!user) {
            throw new Error('User not found');
        }

        const patient: PatientEntity | null = await patientRepository.findOne({
            where: {
                person: {
                    id: user.person.id,
                },
            },
            relations: {
                person: true,
            },
        });

        if (!patient) {
            throw new Error('Patient not found');
        }

        const createdSchedule = await schedulingRepository.save({
            startDate: scheduling.startDate,
            endDate: scheduling.endDate,
            reason: scheduling.reason,
            agreement: {
                id: scheduling.agreementId,
            },
            company: {
                id: scheduling.companyId,
            },
            patient: {
                id: patient.id,
            },
            doctor: {
                id: scheduling.doctorId,
            },
            procedures: [{ id: scheduling.procedureId }],
            paymentMethods: [{ id: scheduling.paymentMethodId }],
        });

        const mappedSchedule = new Scheduling(
            {
                startDate: createdSchedule.startDate,
                endDate: createdSchedule.endDate,
                status: createdSchedule.status,
                reason: createdSchedule.reason,
            },
            createdSchedule.id
        );

        return mappedSchedule;
    }
    async read(): Promise<Scheduling[]> {
        const schedulingRepository: Repository<SchedulingEntity> = dataSource.getRepository(SchedulingEntity);

        const schedules = await schedulingRepository.find();

        const mappedSchedules = schedules.map((scheduling) => {
            return new Scheduling(
                {
                    startDate: scheduling.startDate,
                    endDate: scheduling.endDate,
                    status: scheduling.status,
                },
                scheduling.id
            );
        });

        return mappedSchedules;
    }

    async readByCompanyId(companyId: number): Promise<Scheduling[]> {
        const schedulingRepository: Repository<SchedulingEntity> = dataSource.getRepository(SchedulingEntity);

        const schedules = await schedulingRepository.find({
            where: {
                company: {
                    id: companyId,
                },
            },
        });

        const mappedSchedules = schedules.map((scheduling) => {
            return new Scheduling(
                {
                    status: scheduling.status,
                    startDate: scheduling.startDate,
                    endDate: scheduling.endDate,
                },
                scheduling.id
            );
        });

        return mappedSchedules;
    }

    async readByUserId(userId: number): Promise<Scheduling[]> {
        const userRepository: Repository<UserEntity> = dataSource.getRepository(UserEntity);

        const schedulingRepository: Repository<SchedulingEntity> = dataSource.getRepository(SchedulingEntity);

        const user: UserEntity | null = await userRepository.findOne({
            where: {
                id: userId,
            },
            relations: {
                person: true,
            },
        });

        if (!user) {
            throw new Error('User not found');
        }

        const schedules = await schedulingRepository.find({
            where: {
                patient: {
                    person: {
                        id: user.person.id,
                    },
                },
            },
            relations: {
                company: true,
                procedures: true,
            },
        });

        const mappedSchedules = schedules.map((scheduling) => {
            return new Scheduling(
                {
                    startDate: scheduling.startDate,
                    endDate: scheduling.endDate,
                    status: scheduling.status,
                    company: new Company(
                        {
                            companyName: scheduling.company.companyName,
                            fantasyName: scheduling.company.fantasyName,
                        },
                        scheduling.company.id
                    ),
                    procedures: scheduling.procedures.map(
                        (procedure) =>
                            new Procedure(
                                {
                                    name: procedure.name,
                                    durationTimeUnit: procedure.durationTimeUnit,
                                    durationTime: procedure.durationTime,
                                    type: procedure.type,
                                },
                                procedure.id
                            )
                    ),
                },
                scheduling.id
            );
        });

        return mappedSchedules;
    }
}
