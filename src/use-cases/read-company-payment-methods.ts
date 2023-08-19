import { IPaymentMethodDTO } from '@/interfaces/payment-method';

export interface IReadCompanyPaymentMethodsUseCase {
    execute(companyId: number): Promise<IPaymentMethodDTO[]>;
}
