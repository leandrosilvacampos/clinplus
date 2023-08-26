import { IUserRepository } from '@/repositories/user';
import { TypeORMUserRepository } from '@/repositories/implementations/type-orm/user';

export const makeUserRepository = (): IUserRepository => {
    const userRepository: IUserRepository = new TypeORMUserRepository();

    return userRepository;
};
