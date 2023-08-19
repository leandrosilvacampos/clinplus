import { IController } from '@/shared/interfaces/controller';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';
import { IReadCompanyAgreementsUseCase } from '@/use-cases/read-company-agreements';

export class ReadCompanyAgreementsController implements IController {
    constructor(private readonly _readCompanyAgreementsUseCase: IReadCompanyAgreementsUseCase) {}

    async handle(req: IRequest): Promise<IResponse> {
        try {
            const { companyId } = req.params;

            const agreements = await this._readCompanyAgreementsUseCase.execute(Number(companyId));

            return {
                status: 200,
                body: agreements,
            };
        } catch (error) {
            return {
                status: 500,
                body: 'Internal Server Error',
            };
        }
    }
}
