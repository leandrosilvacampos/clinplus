import { dataSource } from '@/data/type-orm/config/data-source';
import { PaymentMethodEntity } from '@/data/type-orm/entities/payment-method';
import { PaymentMethod } from '@/entities/payment-method';
import { IPaymentMethodRepository } from '@/repositories/payment-method';
import { Repository } from 'typeorm';

export class TypeORMPaymentMethodRepository implements IPaymentMethodRepository {
    async readByCompanyId(companyId: number): Promise<PaymentMethod[]> {
        const paymentMethodRepository: Repository<PaymentMethodEntity> = dataSource.getRepository(PaymentMethodEntity);

        const schedules = await paymentMethodRepository.find({
            where: {
                companies: {
                    id: companyId,
                },
            },
        });

        const mappedSchedules = schedules.map((paymentMethod) => {
            return new PaymentMethod(
                {
                    name: paymentMethod.name,
                },
                paymentMethod.id
            );
        });

        return mappedSchedules;
    }
}
