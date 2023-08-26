import { Agreement } from '@/entities/agreement';

export interface IAgreementRepository {
    readByCompanyId(companyId: number): Promise<Agreement[]>;
}
