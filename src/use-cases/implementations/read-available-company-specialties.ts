import { ISpecialtyRepository } from '@/repositories/specialty';
import { IReadAvailableCompanySpecialtiesUseCase } from '../read-available-company-specialties';
import { ISpecialtyDTO } from '@/interfaces/specialty';
import { Specialty } from '@/entities/specialty';

export class ReadAvailableCompanySpecialtiesUseCase implements IReadAvailableCompanySpecialtiesUseCase {
    constructor(private readonly _specialtyRepository: ISpecialtyRepository) {}

    async execute(companyId: number): Promise<ISpecialtyDTO[]> {
        const specialties: Specialty[] = await this._specialtyRepository.readByCompany(companyId);

        const mappedSpecialties: ISpecialtyDTO[] = specialties.map((specialty) => ({
            id: specialty.id,
            name: specialty.name,
            description: specialty.description,
        }));

        return mappedSpecialties;
    }
}
