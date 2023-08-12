import { ICompanyRepository } from '@/repositories/company';
import { TypeORMCompanyRepository } from '@/repositories/implementations/type-orm/company';

export const makeCompanyRepository = (): ICompanyRepository => {
    const companyRepository: ICompanyRepository = new TypeORMCompanyRepository();

    return companyRepository;
};
