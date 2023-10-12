import { IUserDecodedDTO } from '@/data/dtos/user';
import { SystemFeature } from '@/entities/system-feature';
import { RequestHelper } from '@/helpers/request';
import { IUserRepository } from '@/repositories/user';
import { IMiddleware } from '@/shared/interfaces/middleware';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';
import { decode, verify } from 'jsonwebtoken';

export class AuthMiddleware implements IMiddleware {
    constructor(private readonly _userRepository: IUserRepository) {}

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

            const userLoggedIn = decode(accessToken) as IUserDecodedDTO;

            const { baseUrl, method, routePath } = req;
            const route = routePath === '/' ? baseUrl : `${baseUrl}${routePath}`;
            const permissions: SystemFeature[] = await this._userRepository.readSystemFeaturesByUser(userLoggedIn.id);

            const hasPermission = permissions.some((permission) => permission.route === route && permission.httpVerb === method);

            if (!hasPermission) {
                return {
                    status: 403,
                    body: 'Forbidden',
                };
            }

            return {
                status: 200,
                data: { user: userLoggedIn },
            };
        } catch (error) {
            return RequestHelper.handleError(error);
        }
    }
}
