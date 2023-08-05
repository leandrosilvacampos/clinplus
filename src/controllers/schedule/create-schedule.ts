import { IController } from '@/shared/interfaces/controller';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';

export class CreateScheduleController implements IController {
    async handle(req: IRequest): Promise<IResponse> {
        try {
            console.log('Teste: ', 'Teste');

            return { body: req.body };
        } catch (error) {
            return {
                status: 500,
                body: 'Internal Server Error',
            };
        }
    }
}
