import { dataSource } from '@/data/type-orm/config/data-source';
import { AgreementEntity } from '@/data/type-orm/entities/agreement';
import { IController } from '@/shared/interfaces/controller';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';

export class ReadAgreementsController implements IController {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async handle(req: IRequest): Promise<IResponse> {
        try {
            const agreementRepository = dataSource.getRepository(AgreementEntity);

            const agreements = await agreementRepository.find();

            return { body: agreements };
        } catch (error) {
            return {
                status: 500,
                body: 'Internal Server Error',
            };
        }
    }
}
