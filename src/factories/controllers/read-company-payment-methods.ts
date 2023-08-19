import { IController } from '@/shared/interfaces/controller';
import { IReadCompanyPaymentMethodsUseCase } from '@/use-cases/read-company-payment-methods';
import { makeReadCompanyPaymentMethodsUseCase } from '../use-cases/read-company-payment-methods';
import { ReadCompanyPaymentMethodsController } from '@/controllers/payment-method/read-company-payment-methods';

export const makeReadPaymentMethodsController = (): IController => {
    const readCompanyPaymentMethodsUseCase: IReadCompanyPaymentMethodsUseCase = makeReadCompanyPaymentMethodsUseCase();

    const readCompanyPaymentMethodsController: IController = new ReadCompanyPaymentMethodsController(readCompanyPaymentMethodsUseCase);

    return readCompanyPaymentMethodsController;
};
