import { ISchedulingDTO } from '@/interfaces/scheduling';
import { IController } from '@/shared/interfaces/controller';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';
import { IReadUserSchedulesUseCase } from '@/use-cases/read-user-schedules';

export class ReadUserSchedulesController implements IController {
    constructor(private readonly _readUserSchedulesUseCase: IReadUserSchedulesUseCase) {}

    async handle(req: IRequest): Promise<IResponse> {
        const schedulings: ISchedulingDTO[] = await this._readUserSchedulesUseCase.execute(req.data.user.id);

        return {
            status: 201,
            body: schedulings,
        };
    }
}
