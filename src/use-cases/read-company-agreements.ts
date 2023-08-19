import { IAgreementDTO } from '@/interfaces/agreement';

export interface IReadCompanyAgreementsUseCase {
    execute(companyId: number): Promise<IAgreementDTO[]>;
}
