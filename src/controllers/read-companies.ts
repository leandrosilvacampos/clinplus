import { dataSource } from '@/database/config/connection';
import { CompanyEntity } from '@/database/entities/company';
import { Controller } from '@/interfaces/controller';
import { Request, Response } from 'express';

export class ReadCompaniesController implements Controller {
    async handle(req: Request, res: Response): Promise<void> {
        try {
            const companyRepository = dataSource.getRepository(CompanyEntity);

            const companies = await companyRepository.find();

            res.json(companies);
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
}
