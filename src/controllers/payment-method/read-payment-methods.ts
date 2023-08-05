import { dataSource } from '@/data/type-orm/config/data-source';
import { PaymentMethodEntity } from '@/data/type-orm/entities/payment-method';
import { IController } from '@/shared/interfaces/controller';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';

export class ReadPaymentMethodsController implements IController {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async handle(req: IRequest): Promise<IResponse> {
        try {
            const paymentMethodRepository = dataSource.getRepository(PaymentMethodEntity);

            const paymentMethods = await paymentMethodRepository.find();

            return { body: paymentMethods };
        } catch (error) {
            return {
                status: 500,
                body: 'Internal Server Error',
            };
        }
    }
}
