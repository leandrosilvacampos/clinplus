import { IAgreementRepository } from '@/repositories/agreements';
import { ReadAgreementsUseCase } from '@/use-cases/implementations/read-agreements';
import { IReadAgreementsUseCase } from '@/use-cases/read-agreements';
import { makeAgreementRepository } from '../repositories/agreements';

export const makeReadAgreementsUseCase = (): IReadAgreementsUseCase => {
    const agreementRepository: IAgreementRepository = makeAgreementRepository();

    const useCase: IReadAgreementsUseCase = new ReadAgreementsUseCase(agreementRepository);

    return useCase;
};
