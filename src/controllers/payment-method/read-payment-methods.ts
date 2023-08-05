import { dataSource } from '@/database/config/connection';
import { PaymentMethodEntity } from '@/database/entities/payment-method';
import { Controller } from '@/interfaces/controller';
import { Request, Response } from 'express';

export class ReadPaymentMethodsController implements Controller {
    async handle(req: Request, res: Response): Promise<void> {
        try {
            const paymentMethodRepository = dataSource.getRepository(PaymentMethodEntity);

            const paymentMethods = await paymentMethodRepository.find();

            res.json(paymentMethods);
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
}
