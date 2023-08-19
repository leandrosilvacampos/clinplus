/* eslint-disable @typescript-eslint/no-explicit-any */
import { IController } from '@/shared/interfaces/controller';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';
import { Request, Response } from 'express';

export const adaptRoute = (controller: IController) => {
    return async (expressRequestObj: Request, expressResponseObj: Response) => {
        try {
            const request: IRequest = {
                body: expressRequestObj.body,
                params: expressRequestObj.params,
                query: expressRequestObj.query,
            };

            console.log('expressRequestObj.params: ', expressRequestObj.params);

            const httpResponse: IResponse = await controller.handle(request);

            expressResponseObj.status(httpResponse.status || 200).json(httpResponse.body);
        } catch (error) {
            expressResponseObj.status(500).json({
                error: 'Internal Server Error',
            });
        }
    };
};
