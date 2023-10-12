import { AuthMiddleware } from '@/middlewares/auth.middleware';
import { IUserRepository } from '@/repositories/user';
import { IMiddleware } from '@/shared/interfaces/middleware';
import { makeUserRepository } from '../repositories/user';

export const makeAuthMiddleware = (): IMiddleware => {
    const userRepository: IUserRepository = makeUserRepository();
    const authMiddleware: IMiddleware = new AuthMiddleware(userRepository);

    return authMiddleware;
};
