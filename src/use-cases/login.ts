import { ILoginUseCaseDTO } from '@/interfaces/user';

export interface ILoginUseCase {
    execute(params: ILoginUseCaseDTO): Promise<void>;
}
