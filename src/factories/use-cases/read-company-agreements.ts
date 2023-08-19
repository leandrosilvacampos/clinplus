import { IAgreementRepository } from '@/repositories/agreements';
import { ReadCompanyAgreementsUseCase } from '@/use-cases/implementations/read-company-agreements';
import { IReadCompanyAgreementsUseCase } from '@/use-cases/read-company-agreements';
import { makeAgreementRepository } from '../repositories/agreement';

export const makeReadCompanyAgreementsUseCase = (): IReadCompanyAgreementsUseCase => {
    const agreementRepository: IAgreementRepository = makeAgreementRepository();

    const useCase: IReadCompanyAgreementsUseCase = new ReadCompanyAgreementsUseCase(agreementRepository);

    return useCase;
};
