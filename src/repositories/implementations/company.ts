import { dataSource } from '@/data/type-orm/config/data-source';
import { CompanyEntity } from '@/data/type-orm/entities/company';
import { Company } from '@/entities/company';
import { ICompanyRepository } from '../company';

export class CompanyRepository implements ICompanyRepository {
    async find(): Promise<Company[]> {
        const companyRepository = dataSource.getRepository(CompanyEntity);

        const companies = await companyRepository.find();

        const mappedCompanies = companies.map((company) => {
            return new Company(
                {
                    fantasyName: company.fantasyName,
                    companyName: company.companyName,
                },
                company.id
            );
        });

        return mappedCompanies;
    }
}
