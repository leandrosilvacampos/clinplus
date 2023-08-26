import { dataSource } from '@/data/type-orm/config/data-source';
import { SchedulingEntity } from '@/data/type-orm/entities/scheduling';
import { Scheduling } from '@/entities/scheduling';
import { ICreateScheduleRepositoryDTO } from '@/interfaces/scheduling';
import { ISchedulingRepository } from '@/repositories/scheduling';
import { Repository } from 'typeorm';

export class TypeORMSchedulingRepository implements ISchedulingRepository {
    async create(scheduling: ICreateScheduleRepositoryDTO): Promise<Scheduling> {
        const schedulingRepository: Repository<SchedulingEntity> = dataSource.getRepository(SchedulingEntity);

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
            procedures: [{ id: scheduling.procedureId }],
            paymentMethods: [{ id: scheduling.paymentMethodId }],
        });

        const mappedSchedule = new Scheduling(
            {
                startDate: createdSchedule.startDate,
                endDate: createdSchedule.endDate,
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
                    startDate: scheduling.startDate,
                    endDate: scheduling.endDate,
                },
                scheduling.id
            );
        });

        return mappedSchedules;
    }
}
