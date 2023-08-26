import { User } from '@/entities/user';
import { ILoginUseCaseDTO } from '@/interfaces/user';

export interface ILoginUseCase {
    execute(params: ILoginUseCaseDTO): Promise<User>;
}
