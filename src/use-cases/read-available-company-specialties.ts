import { ISpecialtyDTO } from '@/interfaces/specialty';

export interface IReadAvailableCompanySpecialtiesUseCase {
    execute(companyId: number): Promise<ISpecialtyDTO[]>;
}
