import { IController } from '@/shared/interfaces/controller';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';
import { IReadAvailableCompanyHoursUseCase } from '@/use-cases/read-available-company-hours';

export class ReadAvailableCompanyHoursController implements IController {
    constructor(private readonly _readAvailableCompanyHoursUseCase: IReadAvailableCompanyHoursUseCase) {}

    async handle(req: IRequest): Promise<IResponse> {
        try {
            const id = Number(req.params.id);
            const date = req.query.date as string;
            const timezone = req.query.timezone;
            const procedureId = 1;

            const availableHours = await this._readAvailableCompanyHoursUseCase.execute({
                companyId: id,
                date: date,
                procedureId,
                timezone,
            });

            return { body: availableHours };
        } catch (error) {
            return {
                status: 500,
                body: 'Internal Server Error',
            };
        }
    }
}
