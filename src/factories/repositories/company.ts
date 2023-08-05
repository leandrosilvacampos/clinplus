import { ICompanyRepository } from '@/repositories/company';
import { CompanyRepository } from '@/repositories/implementations/company';

export const makeCompanyRepository = (): ICompanyRepository => {
    const companyRepository: ICompanyRepository = new CompanyRepository();

    return companyRepository;
};
