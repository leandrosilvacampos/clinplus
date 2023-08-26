import { User } from '@/entities/user';
import { ILoginUseCaseDTO } from '@/interfaces/user';
import { ILoginUseCase } from '../login';
import { IUserRepository } from '@/repositories/user';

export class LoginUseCase implements ILoginUseCase {
    constructor(private readonly _userRepository: IUserRepository) {}

    execute(params: ILoginUseCaseDTO): Promise<User> {
        throw new Error('Method not implemented.' + params + this._userRepository);
    }
}
