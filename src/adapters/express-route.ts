/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHelper } from '@/helpers/request';
import { IController } from '@/shared/interfaces/controller';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';
import { Request, Response } from 'express';

export const adaptRoute = (controller: IController) => {
    return async (expressRequestObj: Request, expressResponseObj: Response) => {
        try {
            const request: IRequest = RequestHelper.parseExpressRequest(expressRequestObj);

            const response: IResponse = await controller.handle(request);

            expressResponseObj.status(response.status).json(response.body);
        } catch (error) {
            const response: IResponse = RequestHelper.handleError(error);

            expressResponseObj.status(response.status).json(response.body);
        }
    };
};
