import { dataSource } from '@/data/type-orm/config/data-source';
import { SpecialtyEntity } from '@/data/type-orm/entities/specialty';
import { Specialty } from '@/entities/specialty';
import { ISpecialtyRepository } from '@/repositories/specialty';
import { Repository } from 'typeorm';

export class TypeORMSpecialtyRepository implements ISpecialtyRepository {
    async readByCompany(companyId: number): Promise<Specialty[]> {
        const specialtyRepository: Repository<SpecialtyEntity> = dataSource.getRepository(SpecialtyEntity);

        const specialties: SpecialtyEntity[] = await specialtyRepository.find({
            where: {
                doctors: {
                    person: {
                        company: {
                            id: companyId,
                        },
                    },
                },
            },
        });

        const mappedSpecialties: Specialty[] = specialties.map(
            (specialty) =>
                new Specialty(
                    {
                        name: specialty.name,
                        description: specialty.description,
                    },
                    specialty.id
                )
        );

        return mappedSpecialties;
    }
}
