import { ReadCompaniesController } from '@/controllers/company/read-companies';
import { IController } from '@/shared/interfaces/controller';
import { makeCompanyRepository } from '../repositories/company';
import { ICompanyRepository } from '@/repositories/company';

export const makeReadCompaniesController = (): IController => {
    const companyRepository: ICompanyRepository = makeCompanyRepository();

    const readCompaniesController: IController = new ReadCompaniesController(companyRepository);

    return readCompaniesController;
};
