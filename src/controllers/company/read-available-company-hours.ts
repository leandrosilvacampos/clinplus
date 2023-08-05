import { IController } from '@/shared/interfaces/controller';
import { ReadAvailableCompanyHoursUseCase } from '@/use-cases/read-available-company-hours';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';

export class ReadAvailableCompanyHoursController implements IController {
    async handle(req: IRequest): Promise<IResponse> {
        try {
            const id = Number(req.params.id);
            const date = req.query.date as string;

            const availableHours = await new ReadAvailableCompanyHoursUseCase().execute(id, date);

            return { body: availableHours };
        } catch (error) {
            return {
                status: 500,
                body: 'Internal Server Error',
            };
        }
    }
}
