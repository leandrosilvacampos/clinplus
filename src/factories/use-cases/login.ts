import { IUserRepository } from '@/repositories/user';
import { LoginUseCase } from '@/use-cases/implementations/login';
import { ILoginUseCase } from '@/use-cases/login';
import { makeUserRepository } from '../repositories/user';

export const makeLoginUseCase = (): ILoginUseCase => {
    const userRepository: IUserRepository = makeUserRepository();

    const useCase: ILoginUseCase = new LoginUseCase(userRepository);

    return useCase;
};
