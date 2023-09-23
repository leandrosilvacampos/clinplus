import { ISchedulingRepository } from '@/repositories/scheduling';
import { Scheduling } from '@/entities/scheduling';
import { IReadUserSchedulesUseCase } from '../read-user-schedules';
import { ISchedulingDTO } from '@/interfaces/scheduling';

export class ReadUserSchedulesUseCase implements IReadUserSchedulesUseCase {
    constructor(private readonly _schedulingRepository: ISchedulingRepository) {}

    async execute(userId: number): Promise<ISchedulingDTO[]> {
        const schedules: Scheduling[] = await this._schedulingRepository.readByUserId(userId);

        return schedules.map((schedule) => {
            return {
                date: schedule.startDate.toISOString(),
                status: 'Agendado',
                procedures: schedule.procedures?.map((procedure) => procedure.name) || [],
                company: schedule.company?.companyName || '',
            };
        });
    }
}
