import { RequestHelper } from '@/helpers/request';
import { IMiddleware } from '@/shared/interfaces/middleware';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';
import { decode, verify } from 'jsonwebtoken';

export class AuthMiddleware implements IMiddleware {
    constructor() {}

    async handle(req: IRequest): Promise<IResponse> {
        try {
            const authorizationHeader = req.headers?.authorization;

            if (!authorizationHeader) {
                return {
                    status: 401,
                    body: 'Unauthorized',
                };
            }

            const [, accessToken] = authorizationHeader.split(' ');

            verify(accessToken, process.env.JWT_SECRET as string);

            const userLoggedIn = decode(accessToken);

            return {
                status: 200,
                data: { user: userLoggedIn },
            };
        } catch (error) {
            return RequestHelper.handleError(error);
        }
    }
}
