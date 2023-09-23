import { ISchedulingDTO } from '@/interfaces/scheduling';

export interface IReadUserSchedulesUseCase {
    execute(companyId: number): Promise<ISchedulingDTO[]>;
}
