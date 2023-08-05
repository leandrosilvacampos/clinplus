import { Company } from '@/entities/company';

export interface ICompanyRepository {
    find(): Promise<Company[]>;
}
