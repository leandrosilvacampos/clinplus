import { IController } from '@/shared/interfaces/controller';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';
import { ICreateScheduleUseCase } from '@/use-cases/create-schedule';

export class CreateScheduleController implements IController {
    constructor(private readonly _createScheduleUseCase: ICreateScheduleUseCase) {}

    async handle(req: IRequest): Promise<IResponse> {
        try {
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
        } catch (error) {
            console.log(error);

            return {
                status: 500,
                body: 'Internal Server Error',
            };
        }
    }
}
