import { IController } from '@/shared/interfaces/controller';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';
import { IReadAgreementsUseCase } from '@/use-cases/read-agreements';

export class ReadAgreementsController implements IController {
    constructor(private readonly _readAgreementsUseCase: IReadAgreementsUseCase) {}

    async handle(req: IRequest): Promise<IResponse> {
        try {
            const { companyId } = req.params;

            console.log('req.params: ', req.params);

            const agreements = await this._readAgreementsUseCase.execute(Number(companyId));

            return {
                status: 200,
                body: agreements,
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
