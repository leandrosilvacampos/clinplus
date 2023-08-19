import { ICreateScheduleUseCase } from '@/use-cases/create-schedule';
import { makeCreateScheduleUseCase } from '../use-cases/create-schedule';
import { IController } from '@/shared/interfaces/controller';
import { CreateScheduleController } from '@/controllers/schedule/create-schedule';

export const makeCreateScheduleController = (): IController => {
    const createScheduleUseCase: ICreateScheduleUseCase = makeCreateScheduleUseCase();

    const createScheduleController: IController = new CreateScheduleController(createScheduleUseCase);

    return createScheduleController;
};
