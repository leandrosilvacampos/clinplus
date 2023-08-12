import { Company } from '@/entities/company';

export interface ICompanyRepository {
    read(): Promise<Company[]>;
}
