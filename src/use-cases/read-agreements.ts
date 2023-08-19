import { IAgreementDTO } from '@/interfaces/agreements';

export interface IReadAgreementsUseCase {
    execute(companyId: number): Promise<IAgreementDTO[]>;
}
