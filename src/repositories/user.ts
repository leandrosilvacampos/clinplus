import { SystemFeature } from '@/entities/system-feature';
import { User } from '@/entities/user';

export interface IUserRepository {
    readByEmail(email: string): Promise<User | null>;
    readSystemFeaturesByUser(userId: number): Promise<SystemFeature[]>;
}
