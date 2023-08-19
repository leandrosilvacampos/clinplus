import { IPaymentMethodDTO } from '@/interfaces/payment-method';
import { IReadCompanyPaymentMethodsUseCase } from '../read-company-payment-methods';
import { IPaymentMethodRepository } from '@/repositories/payment-method';
import { PaymentMethod } from '@/entities/payment-method';

export class ReadCompanyPaymentMethodsUseCase implements IReadCompanyPaymentMethodsUseCase {
    constructor(private readonly _paymentMethodRepository: IPaymentMethodRepository) {}

    async execute(companyId: number): Promise<IPaymentMethodDTO[]> {
        const paymentMethods: PaymentMethod[] = await this._paymentMethodRepository.readByCompanyId(companyId);

        const mappedPaymentMethods: IPaymentMethodDTO[] = paymentMethods.map((paymentMethod) => {
            return {
                id: paymentMethod.id as number,
                name: paymentMethod.name,
            };
        });

        return mappedPaymentMethods;
    }
}
