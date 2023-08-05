import { dataSource } from '@/database/config/connection';
import { CompanyEntity } from '@/database/entities/company';
import { Company } from '@/entities/company';

export class CompanyRepository {
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
