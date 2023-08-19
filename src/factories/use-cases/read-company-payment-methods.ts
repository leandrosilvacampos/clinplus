import { IPaymentMethodRepository } from '@/repositories/payment-method';
import { IReadCompanyPaymentMethodsUseCase } from '@/use-cases/read-company-payment-methods';
import { makePaymentMethodRepository } from '../repositories/payment-method';
import { ReadCompanyPaymentMethodsUseCase } from '@/use-cases/implementations/read-company-payment-methods';

export const makeReadCompanyPaymentMethodsUseCase = (): IReadCompanyPaymentMethodsUseCase => {
    const paymentMethodRepository: IPaymentMethodRepository = makePaymentMethodRepository();

    const useCase: IReadCompanyPaymentMethodsUseCase = new ReadCompanyPaymentMethodsUseCase(paymentMethodRepository);

    return useCase;
};
