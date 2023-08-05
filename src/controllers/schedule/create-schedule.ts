import { Controller } from '@/interfaces/controller';
import { Request, Response } from 'express';

export class CreateScheduleController implements Controller {
    async handle(req: Request, res: Response): Promise<void> {
        try {
            console.log('Teste: ', 'Teste');

            res.json({ ...req.body });
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
}
