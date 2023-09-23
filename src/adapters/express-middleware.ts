/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHelper } from '@/helpers/request';
import { IMiddleware } from '@/shared/interfaces/middleware';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';
import { NextFunction, Request, Response } from 'express';

export const adaptMiddleware = (middleware: IMiddleware) => {
    return async (expressRequestObj: Request, expressResponseObj: Response, next: NextFunction) => {
        try {
            const request: IRequest = RequestHelper.parseExpressRequest(expressRequestObj);

            const response: IResponse = await middleware.handle(request);

            if (response.status === 200) {
                if (response.data) {
                    const copyOfExpressRequestObjData = { ...((expressRequestObj as any)['data'] || {}) };

                    Object.assign(copyOfExpressRequestObjData, response.data);

                    (expressRequestObj as any)['data'] = copyOfExpressRequestObjData;
                }

                next();
            } else {
                expressResponseObj.status(response.status).json(response.body);
            }
        } catch (error) {
            const response: IResponse = RequestHelper.handleError(error);

            expressResponseObj.status(response.status).json(response.body);
        }
    };
};
