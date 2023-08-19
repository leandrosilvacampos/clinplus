import { PaymentMethod } from '@/entities/payment-method';

export interface IPaymentMethodRepository {
    readByCompanyId(companyId: number): Promise<PaymentMethod[]>;
}
