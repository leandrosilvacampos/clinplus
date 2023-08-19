import { IController } from '@/shared/interfaces/controller';
import { ReadAgreementsController } from '@/controllers/agreement/read-agreements';
import { makeReadAgreementsUseCase } from '../use-cases/read-agreements';
import { IReadAgreementsUseCase } from '@/use-cases/read-agreements';

export const makeReadAgreementsController = (): IController => {
    const readAgreementsUseCase: IReadAgreementsUseCase = makeReadAgreementsUseCase();

    const readAgreementsController: IController = new ReadAgreementsController(readAgreementsUseCase);

    return readAgreementsController;
};
