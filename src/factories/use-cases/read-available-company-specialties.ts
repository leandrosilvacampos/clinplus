import { IReadAvailableCompanySpecialtiesUseCase } from '@/use-cases/read-available-company-specialties';
import { ReadAvailableCompanySpecialtiesUseCase } from '@/use-cases/implementations/read-available-company-specialties';
import { makeSpecialtyRepository } from '../repositories/specialty';
import { ISpecialtyRepository } from '@/repositories/specialty';

export const makeReadAvailableCompanySpecialtiesUseCase = (): IReadAvailableCompanySpecialtiesUseCase => {
    const specialtyRepository: ISpecialtyRepository = makeSpecialtyRepository();

    const useCase: IReadAvailableCompanySpecialtiesUseCase = new ReadAvailableCompanySpecialtiesUseCase(specialtyRepository);

    return useCase;
};
