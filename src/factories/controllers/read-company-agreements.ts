import { IController } from '@/shared/interfaces/controller';
import { makeReadCompanyAgreementsUseCase } from '../use-cases/read-company-agreements';
import { IReadCompanyAgreementsUseCase } from '@/use-cases/read-company-agreements';
import { ReadCompanyAgreementsController } from '@/controllers/agreement/read-company-agreements';

export const makeReadCompanyAgreementsController = (): IController => {
    const readCompanyAgreementsUseCase: IReadCompanyAgreementsUseCase = makeReadCompanyAgreementsUseCase();

    const readCompanyAgreementsController: IController = new ReadCompanyAgreementsController(readCompanyAgreementsUseCase);

    return readCompanyAgreementsController;
};
