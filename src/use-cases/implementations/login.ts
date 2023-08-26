import { User } from '@/entities/user';
import { ILoginUseCaseDTO } from '@/interfaces/user';
import { ILoginUseCase } from '../login';
import { IUserRepository } from '@/repositories/user';
import bcrypt from 'bcrypt';
export class LoginUseCase implements ILoginUseCase {
    constructor(private readonly _userRepository: IUserRepository) {}

    async execute(params: ILoginUseCaseDTO): Promise<void> {
        const { email, password } = params;

        const user: User | null = await this._userRepository.readByEmail(email);

        if (!user) {
            throw new Error('User not found');
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            throw new Error('Invalid password');
        }
    }
}
