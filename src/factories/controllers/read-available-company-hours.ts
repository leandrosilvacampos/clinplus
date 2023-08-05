import { ReadAvailableCompanyHoursController } from '@/controllers/company/read-available-company-hours';
import { IController } from '@/shared/interfaces/controller';

export const makeReadAvailableCompanyHoursController = (): IController => {
    const readAvailableCompanyHoursController: IController = new ReadAvailableCompanyHoursController();

    return readAvailableCompanyHoursController;
};
