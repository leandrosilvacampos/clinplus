import { ReadAvailableCompanySpecialtiesController } from '@/controllers/company/read-available-company-specialties';
import { IController } from '@/shared/interfaces/controller';
import { IReadAvailableCompanySpecialtiesUseCase } from '@/use-cases/read-available-company-specialties';
import { makeReadAvailableCompanySpecialtiesUseCase } from '../use-cases/read-available-company-specialties';

export const makeReadAvailableCompanySpecialtiesController = (): IController => {
    const readAvailableCompanySpecialtiesUseCase: IReadAvailableCompanySpecialtiesUseCase = makeReadAvailableCompanySpecialtiesUseCase();

    const readAvailableCompanySpecialtiesController: IController = new ReadAvailableCompanySpecialtiesController(
        readAvailableCompanySpecialtiesUseCase
    );

    return readAvailableCompanySpecialtiesController;
};
