import { ReadAvailableCompanyHoursController } from '@/controllers/company/read-available-company-hours';
import { IController } from '@/shared/interfaces/controller';
import { IReadAvailableCompanyHoursUseCase } from '@/use-cases/read-available-company-hours';
import { makeReadAvailableCompanyHoursUseCase } from '../use-cases/read-available-company-hours';

export const makeReadAvailableCompanyHoursController = (): IController => {
    const readAvailableCompanyHoursUseCase: IReadAvailableCompanyHoursUseCase = makeReadAvailableCompanyHoursUseCase();

    const readAvailableCompanyHoursController: IController = new ReadAvailableCompanyHoursController(readAvailableCompanyHoursUseCase);

    return readAvailableCompanyHoursController;
};
