/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';
import { Request } from 'express';

export const RequestHelper = {
    parseExpressRequest(req: Request): IRequest {
        const { method, cookies, params, body, query, headers, data } = <any>req;

        const httpRequest: IRequest = {
            method,
            cookies,
            params,
            body,
            query,
            headers,
            data,
        };

        return httpRequest;
    },
    handleError(error: unknown): IResponse {
        console.error(error);

        return {
            status: 500,
            body: 'Internal Server Error',
        };
    },
};
