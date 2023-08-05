import { Controller } from '@/interfaces/controller';
import { Request, Response } from 'express';

export class ReadAvailableCompanyHoursController implements Controller {
    async handle(req: Request, res: Response): Promise<void> {
        try {
            console.log('Date: ' + req.query.date);
            console.log('Company ID: ' + req.params.id);

            res.json(['13:00 - 13:45', '13:45 - 14:30']);
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
}
