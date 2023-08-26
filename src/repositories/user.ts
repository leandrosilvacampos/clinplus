import { User } from '@/entities/user';

export interface IUserRepository {
    readByEmail(email: string): Promise<User | null>;
}
