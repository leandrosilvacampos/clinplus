import { IController } from '@/shared/interfaces/controller';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';
import { ILoginUseCase } from '@/use-cases/login';

export class LoginController implements IController {
    constructor(private readonly _loginUseCase: ILoginUseCase) {}

    async handle(req: IRequest): Promise<IResponse> {
        const accessToken = await this._loginUseCase.execute({
            email: req.body.email,
            password: req.body.password,
        });

        return {
            status: 200,
            body: { accessToken },
        };
    }
}
