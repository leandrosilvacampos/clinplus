import { TypeORMPaymentMethodRepository } from '@/repositories/implementations/type-orm/payment-method';
import { IPaymentMethodRepository } from '@/repositories/payment-method';

export const makePaymentMethodRepository = (): IPaymentMethodRepository => {
    const agreementRepository: IPaymentMethodRepository = new TypeORMPaymentMethodRepository();

    return agreementRepository;
};
