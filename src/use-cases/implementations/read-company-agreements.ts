import { IAgreementDTO } from '@/interfaces/agreement';
import { IReadCompanyAgreementsUseCase } from '../read-company-agreements';
import { IAgreementRepository } from '@/repositories/agreement';

export class ReadCompanyAgreementsUseCase implements IReadCompanyAgreementsUseCase {
    constructor(private readonly _agreementRepository: IAgreementRepository) {}

    async execute(companyId: number): Promise<IAgreementDTO[]> {
        const agreements = await this._agreementRepository.readByCompanyId(companyId);

        const mappedAgreements: IAgreementDTO[] = agreements.map((agreement) => {
            return {
                id: agreement.id as number,
                name: agreement.name,
                discountType: agreement.discountType,
                discountValue: agreement.discountValue,
            };
        });

        return mappedAgreements;
    }
}
