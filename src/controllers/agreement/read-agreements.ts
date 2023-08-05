import { dataSource } from '@/database/config/connection';
import { AgreementEntity } from '@/database/entities/agreement';
import { Controller } from '@/interfaces/controller';
import { Request, Response } from 'express';

export class ReadAgreementsController implements Controller {
    async handle(req: Request, res: Response): Promise<void> {
        try {
            const agreementRepository = dataSource.getRepository(AgreementEntity);

            const agreements = await agreementRepository.find();

            res.json(agreements);
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
}
