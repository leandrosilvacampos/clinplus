import { ISchedulingRepository } from '@/repositories/scheduling';
import { makeSchedulingRepository } from '../repositories/scheduling';
import { IReadAvailableCompanyHoursUseCase } from '@/use-cases/read-available-company-hours';
import { makeReadAvailableCompanyHoursUseCase } from './read-available-company-hours';
import { ICreateScheduleUseCase } from '@/use-cases/create-schedule';
import { CreateScheduleUseCase } from '@/use-cases/implementations/create-schedule';

export const makeCreateScheduleUseCase = (): ICreateScheduleUseCase => {
    const readAvailableCompanyHoursUseCase: IReadAvailableCompanyHoursUseCase = makeReadAvailableCompanyHoursUseCase();
    const schedulingRepository: ISchedulingRepository = makeSchedulingRepository();

    const useCase: ICreateScheduleUseCase = new CreateScheduleUseCase(readAvailableCompanyHoursUseCase, schedulingRepository);

    return useCase;
};
