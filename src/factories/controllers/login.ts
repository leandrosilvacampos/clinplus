import { LoginController } from '@/controllers/user/login';
import { IController } from '@/shared/interfaces/controller';
import { ILoginUseCase } from '@/use-cases/login';
import { makeLoginUseCase } from '../use-cases/login';

export const makeLoginController = (): IController => {
    const loginUseCase: ILoginUseCase = makeLoginUseCase();

    const loginController: IController = new LoginController(loginUseCase);

    return loginController;
};
