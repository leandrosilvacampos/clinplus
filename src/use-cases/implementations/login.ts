import { User } from '@/entities/user';
import { ILoginUseCaseDTO } from '@/interfaces/user';
import { ILoginUseCase } from '../login';
import { IUserRepository } from '@/repositories/user';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
export class LoginUseCase implements ILoginUseCase {
    constructor(private readonly _userRepository: IUserRepository) {}

    async execute(params: ILoginUseCaseDTO): Promise<string> {
        const { email, password } = params;

        const user: User | null = await this._userRepository.readByEmail(email);

        if (!user) {
            throw new Error('User not found');
        }

        const isValidPassword = await compare(password, user.password);

        if (!isValidPassword) {
            throw new Error('Invalid password');
        }

        const accessToken = sign({ id: user.id, email: user.person?.email }, process.env.JWT_SECRET as string, {
            expiresIn: '1d',
        });

        return accessToken;
    }
}
