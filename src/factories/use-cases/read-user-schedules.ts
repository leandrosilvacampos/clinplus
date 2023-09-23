import { ISchedulingRepository } from '@/repositories/scheduling';
import { makeSchedulingRepository } from '../repositories/scheduling';
import { IReadUserSchedulesUseCase } from '@/use-cases/read-user-schedules';
import { ReadUserSchedulesUseCase } from '@/use-cases/implementations/read-user-schedules';

export const makeReadUserSchedulesUseCase = (): IReadUserSchedulesUseCase => {
    const schedulingRepository: ISchedulingRepository = makeSchedulingRepository();

    const useCase: IReadUserSchedulesUseCase = new ReadUserSchedulesUseCase(schedulingRepository);

    return useCase;
};
