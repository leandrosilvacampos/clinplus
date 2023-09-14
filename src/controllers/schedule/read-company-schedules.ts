import { Scheduling } from '@/entities/scheduling';
import { IController } from '@/shared/interfaces/controller';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';
import { IReadCompanySchedulesUseCase } from '@/use-cases/read-company-schedules';

export class ReadCompanySchedulesController implements IController {
    constructor(private readonly _readCompanySchedulesUseCase: IReadCompanySchedulesUseCase) {}

    async handle(req: IRequest): Promise<IResponse> {
        const companyId = Number(req.params.companyId);

        const schedulings: Scheduling[] = await this._readCompanySchedulesUseCase.execute(companyId);

        return {
            status: 201,
            body: schedulings,
        };
    }
}
