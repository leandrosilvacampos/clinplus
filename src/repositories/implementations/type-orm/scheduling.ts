import { dataSource } from '@/data/type-orm/config/data-source';
import { SchedulingEntity } from '@/data/type-orm/entities/scheduling';
import { Procedure } from '@/entities/procedure';
import { Scheduling } from '@/entities/scheduling';
import { ICreateScheduleRepositoryDTO } from '@/interfaces/scheduling';
import { ISchedulingRepository } from '@/repositories/scheduling';
import { Repository } from 'typeorm';

export class TypeORMSchedulingRepository implements ISchedulingRepository {
    async create(scheduling: ICreateScheduleRepositoryDTO): Promise<Scheduling> {
        const schedulingRepository: Repository<SchedulingEntity> = dataSource.getRepository(SchedulingEntity);

        const createdSchedule = await schedulingRepository.save(scheduling);

        const mappedSchedule = new Scheduling(
            {
                startDate: createdSchedule.startDate,
                endDate: createdSchedule.endDate,
                procedures: createdSchedule.procedures?.map(
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
