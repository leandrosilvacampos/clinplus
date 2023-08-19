import { IPaymentMethodDTO } from '@/interfaces/payment-method';
import { IController } from '@/shared/interfaces/controller';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';
import { IReadCompanyPaymentMethodsUseCase } from '@/use-cases/read-company-payment-methods';

export class ReadCompanyPaymentMethodsController implements IController {
    constructor(private readonly _readCompanyPaymentMethodsUseCase: IReadCompanyPaymentMethodsUseCase) {}

    async handle(req: IRequest): Promise<IResponse> {
        try {
            const { companyId } = req.params;

            const paymentMethods: IPaymentMethodDTO[] = await this._readCompanyPaymentMethodsUseCase.execute(companyId);

            return { body: paymentMethods };
        } catch (error) {
            return {
                status: 500,
                body: 'Internal Server Error',
            };
        }
    }
}
