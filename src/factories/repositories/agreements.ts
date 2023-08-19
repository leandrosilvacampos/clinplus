import { IAgreementRepository } from '@/repositories/agreements';
import { TypeORMAgreementRepository } from '@/repositories/implementations/type-orm/agreement';

export const makeAgreementRepository = (): IAgreementRepository => {
    const agreementRepository: IAgreementRepository = new TypeORMAgreementRepository();

    return agreementRepository;
};
