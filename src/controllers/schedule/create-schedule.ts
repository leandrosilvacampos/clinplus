import { IController } from '@/shared/interfaces/controller';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';
import { ICreateScheduleUseCase } from '@/use-cases/create-schedule';

export class CreateScheduleController implements IController {
    constructor(private readonly _createScheduleUseCase: ICreateScheduleUseCase) {}

    async handle(req: IRequest): Promise<IResponse> {
        const { paymentMethodId, agreementId, procedureId, reason, date, time, timezone } = req.body;

        if (!paymentMethodId || !agreementId || !procedureId || !date || !time || !timezone) {
            throw new Error('Missing body parameter');
        }

        if (!req.params.companyId) throw new Error('Missing param companyId');

        const companyId = Number(req.params.companyId);
        const userId: number = req.data.user.id;
        const doctorId: number = 1; // Fixed value for now

        const scheduling = await this._createScheduleUseCase.execute({
            companyId,
            paymentMethodId,
            agreementId,
            procedureId,
            doctorId,
            userId,
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
