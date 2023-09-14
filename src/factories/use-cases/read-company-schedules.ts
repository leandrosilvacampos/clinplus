import { ISchedulingRepository } from '@/repositories/scheduling';
import { makeSchedulingRepository } from '../repositories/scheduling';
import { IReadCompanySchedulesUseCase } from '@/use-cases/read-company-schedules';
import { ReadCompanySchedulesUseCase } from '@/use-cases/implementations/read-company-schedules';

export const makeReadCompanySchedulesUseCase = (): IReadCompanySchedulesUseCase => {
    const schedulingRepository: ISchedulingRepository = makeSchedulingRepository();

    const useCase: IReadCompanySchedulesUseCase = new ReadCompanySchedulesUseCase(schedulingRepository);

    return useCase;
};
