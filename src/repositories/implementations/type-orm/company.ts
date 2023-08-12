import { dataSource } from '@/data/type-orm/config/data-source';
import { CompanyEntity } from '@/data/type-orm/entities/company';
import { Company } from '@/entities/company';
import { ICompanyRepository } from '../../company';
import { Repository } from 'typeorm';

export class TypeORMCompanyRepository implements ICompanyRepository {
    async read(): Promise<Company[]> {
        const companyRepository: Repository<CompanyEntity> = dataSource.getRepository(CompanyEntity);

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
