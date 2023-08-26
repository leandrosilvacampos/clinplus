import { dataSource } from '@/data/type-orm/config/data-source';
import { UserEntity } from '@/data/type-orm/entities/user';
import { Person } from '@/entities/person';
import { User } from '@/entities/user';
import { IUserRepository } from '@/repositories/user';
import { Repository } from 'typeorm';

export class TypeORMUserRepository implements IUserRepository {
    async readByEmail(email: string): Promise<User | null> {
        const schedulingRepository: Repository<UserEntity> = dataSource.getRepository(UserEntity);

        const user = await schedulingRepository.findOne({
            where: {
                person: {
                    email,
                },
            },
            relations: {
                person: true,
            },
        });

        if (!user) {
            return null;
        }

        const mappedUser = new User(
            {
                person: new Person(
                    {
                        name: user.person.name,
                        companyName: user.person.companyName,
                        fantasyName: user.person.fantasyName,
                        email: user.person.email,
                        taxDocument: user.person.taxDocument,
                        type: user.person.type,
                    },
                    user.person.id
                ),
                password: user.password,
            },
            user.id
        );

        return mappedUser;
    }
}
