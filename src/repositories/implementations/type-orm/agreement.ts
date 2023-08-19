import { dataSource } from '@/data/type-orm/config/data-source';
import { AgreementEntity } from '@/data/type-orm/entities/agreement';
import { Agreement } from '@/entities/agreement';
import { IAgreementRepository } from '@/repositories/agreements';

import { Repository } from 'typeorm';

export class TypeORMAgreementRepository implements IAgreementRepository {
    async readByCompanyId(companyId: number): Promise<Agreement[]> {
        const agreeementRepository: Repository<AgreementEntity> = dataSource.getRepository(AgreementEntity);

        const schedules = await agreeementRepository.find({
            where: {
                company: {
                    id: companyId,
                },
            },
        });

        const mappedSchedules = schedules.map((agreeement) => {
            return new Agreement(
                {
                    name: agreeement.name,
                    discountValue: agreeement.discountValue,
                    discountType: agreeement.discountType,
                },
                agreeement.id
            );
        });

        return mappedSchedules;
    }
}
