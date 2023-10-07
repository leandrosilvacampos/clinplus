import { Specialty } from '@/entities/specialty';

export interface ISpecialtyRepository {
    readByCompany(companyId: number): Promise<Specialty[]>;
}
