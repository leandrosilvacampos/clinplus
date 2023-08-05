import { Controller } from '@/interfaces/controller';
import { ReadAvailableCompanyHoursUseCase } from '@/use-cases/read-available-company-hours';
import { Request, Response } from 'express';

export class ReadAvailableCompanyHoursController implements Controller {
    async handle(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id);
            const date = req.query.date as string;

            const availableHours = await new ReadAvailableCompanyHoursUseCase().execute(id, date);

            res.json(availableHours);
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
}
