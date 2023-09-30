import { ISchedulingRepository } from '@/repositories/scheduling';
import { Scheduling } from '@/entities/scheduling';
import { IReadUserSchedulesUseCase } from '../read-user-schedules';
import { ISchedulingDTO } from '@/interfaces/scheduling';
import { translateScheduleStatus } from '@/helpers/translate';

export class ReadUserSchedulesUseCase implements IReadUserSchedulesUseCase {
    constructor(private readonly _schedulingRepository: ISchedulingRepository) {}

    async execute(userId: number): Promise<ISchedulingDTO[]> {
        const schedules: Scheduling[] = await this._schedulingRepository.readByUserId(userId);

        return schedules.map((schedule) => {
            return {
                id: schedule.id,
                startDate: schedule.startDate.toISOString(),
                endDate: schedule.endDate.toISOString(),
                status: translateScheduleStatus(schedule.status),
                procedures: schedule.procedures?.map((procedure) => procedure.name) || [],
                company: schedule.company?.companyName || '',
            };
        });
    }
}
