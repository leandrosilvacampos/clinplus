import { Controller } from '@/interfaces/controller';
import { CompanyRepository } from '@/repositories/company';
import { Request, Response } from 'express';

export class ReadCompaniesController implements Controller {
    async handle(req: Request, res: Response): Promise<void> {
        try {
            const companyRepository = new CompanyRepository();
            const companies = await companyRepository.find();

            res.json(companies);
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
}
