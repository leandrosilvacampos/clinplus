import { IController } from '@/shared/interfaces/controller';
import { IReadCompanySchedulesUseCase } from '@/use-cases/read-company-schedules';
import { makeReadCompanySchedulesUseCase } from '../use-cases/read-company-schedules';
import { ReadCompanySchedulesController } from '@/controllers/schedule/read-company-schedules';

export const makeReadCompanySchedulesController = (): IController => {
    const readCompanySchedulesUseCase: IReadCompanySchedulesUseCase = makeReadCompanySchedulesUseCase();

    const readCompanySchedulesController: IController = new ReadCompanySchedulesController(readCompanySchedulesUseCase);

    return readCompanySchedulesController;
};
