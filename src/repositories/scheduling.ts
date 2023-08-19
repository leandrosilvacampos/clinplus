import { Scheduling } from '@/entities/scheduling';
import { ICreateScheduleRepositoryDTO } from '@/interfaces/scheduling';

export interface ISchedulingRepository {
    read(): Promise<Scheduling[]>;
    readByCompanyId(companyId: number): Promise<Scheduling[]>;
    create(scheduling: ICreateScheduleRepositoryDTO): Promise<Scheduling>;
}
