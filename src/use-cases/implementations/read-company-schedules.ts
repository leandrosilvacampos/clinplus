import { ISchedulingRepository } from '@/repositories/scheduling';
import { Scheduling } from '@/entities/scheduling';
import { IReadCompanySchedulesUseCase } from '../read-company-schedules';

export class ReadCompanySchedulesUseCase implements IReadCompanySchedulesUseCase {
    constructor(private readonly _schedulingRepository: ISchedulingRepository) {}

    async execute(companyId: number): Promise<Scheduling[]> {
        const schedules = await this._schedulingRepository.readByCompanyId(companyId);

        return schedules;
    }
}
