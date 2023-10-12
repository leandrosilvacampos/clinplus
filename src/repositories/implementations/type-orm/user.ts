import { dataSource } from '@/data/type-orm/config/data-source';
import { UserEntity } from '@/data/type-orm/entities/user';
import { Person } from '@/entities/person';
import { SystemFeature } from '@/entities/system-feature';
import { User } from '@/entities/user';
import { IUserRepository } from '@/repositories/user';
import { Repository } from 'typeorm';

export class TypeORMUserRepository implements IUserRepository {
    async readSystemFeaturesByUser(userId: number): Promise<SystemFeature[]> {
        const userRepository: Repository<UserEntity> = dataSource.getRepository(UserEntity);

        const user = await userRepository.findOne({
            where: {
                id: userId,
            },
            relations: {
                accessProfile: {
                    permissions: true,
                },
            },
        });

        if (!user) {
            throw new Error('User not found');
        }

        const mappedFeatures = user.accessProfile.permissions.map(
            (permission) =>
                new SystemFeature({
                    name: permission.name,
                    route: permission.route,
                    httpVerb: permission.httpVerb,
                })
        );

        return mappedFeatures;
    }
    async readByEmail(email: string): Promise<User | null> {
        const userRepository: Repository<UserEntity> = dataSource.getRepository(UserEntity);

        const user = await userRepository.findOne({
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
