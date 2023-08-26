import { AuthMiddleware } from '@/middlewares/auth.middleware';
import { IMiddleware } from '@/shared/interfaces/middleware';

export const makeAuthMiddleware = (): IMiddleware => {
    const authMiddleware: IMiddleware = new AuthMiddleware();

    return authMiddleware;
};
