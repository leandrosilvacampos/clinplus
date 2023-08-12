import { IController } from '@/shared/interfaces/controller';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';
import { ICompanyRepository } from '@/repositories/company';
import { Company } from '@/entities/company';
import { ICompanyDTO } from '@/data/dtos/company';

export class ReadCompaniesController implements IController {
    constructor(private readonly _companyRepository: ICompanyRepository) {}

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async handle(req: IRequest): Promise<IResponse> {
        try {
            const companies: Company[] = await this._companyRepository.read();

            const mappedCompanies: ICompanyDTO[] = companies.map((company: Company) => ({
                id: company.id as number,
                fantasyName: company.fantasyName,
                companyName: company.companyName,
            }));

            return {
                status: 200,
                body: mappedCompanies,
            };
        } catch (error) {
            return {
                status: 500,
                body: 'Internal Server Error',
            };
        }
    }
}
