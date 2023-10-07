import { IProcedureRepository } from '@/repositories/procedure';
import { ISchedulingRepository } from '@/repositories/scheduling';
import { ReadAvailableCompanyHoursUseCase } from '@/use-cases/implementations/read-available-company-hours';
import { IReadAvailableCompanyHoursUseCase } from '@/use-cases/read-available-company-hours';
import { makeProcedureRepository } from '../repositories/procedure';
import { makeSchedulingRepository } from '../repositories/scheduling';

export const makeReadAvailableCompanyHoursUseCase = (): IReadAvailableCompanyHoursUseCase => {
    const procedureRepository: IProcedureRepository = makeProcedureRepository();
    const schedulingRepository: ISchedulingRepository = makeSchedulingRepository();

    const useCase: IReadAvailableCompanyHoursUseCase = new ReadAvailableCompanyHoursUseCase(procedureRepository, schedulingRepository);

    return useCase;
};
