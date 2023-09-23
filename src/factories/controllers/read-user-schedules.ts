import { IController } from '@/shared/interfaces/controller';
import { IReadUserSchedulesUseCase } from '@/use-cases/read-user-schedules';
import { makeReadUserSchedulesUseCase } from '../use-cases/read-user-schedules';
import { ReadUserSchedulesController } from '@/controllers/schedule/read-user-schedules';

export const makeReadUserSchedulesController = (): IController => {
    const readUserSchedulesUseCase: IReadUserSchedulesUseCase = makeReadUserSchedulesUseCase();

    const readUserSchedulesController: IController = new ReadUserSchedulesController(readUserSchedulesUseCase);

    return readUserSchedulesController;
};
