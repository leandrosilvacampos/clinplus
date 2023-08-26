import { IRequest } from './request';
import { IResponse } from './response';

export interface IMiddleware {
    handle(req: IRequest): Promise<IResponse>;
}
