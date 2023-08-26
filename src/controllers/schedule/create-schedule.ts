import { IController } from '@/shared/interfaces/controller';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';
import { ICreateScheduleUseCase } from '@/use-cases/create-schedule';

export class CreateScheduleController implements IController {
    constructor(private readonly _createScheduleUseCase: ICreateScheduleUseCase) {}

    async handle(req: IRequest): Promise<IResponse> {
        const { paymentMethodId, agreementId, reason, date, time, timezone } = req.body;

        const companyId = Number(req.params.companyId);
        const procedureId = 1;

        const scheduling = await this._createScheduleUseCase.execute({
            companyId,
            paymentMethodId,
            agreementId,
            procedureId,
            reason,
            date,
            time,
            timezone,
        });

        return {
            status: 201,
            body: scheduling,
        };
    }
}
