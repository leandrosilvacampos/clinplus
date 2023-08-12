import { Scheduling } from '@/entities/scheduling';

export interface ISchedulingRepository {
    read(): Promise<Scheduling[]>;
    readByCompanyId(companyId: number): Promise<Scheduling[]>;
}
