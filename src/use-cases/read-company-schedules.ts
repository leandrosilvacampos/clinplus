import { Scheduling } from '@/entities/scheduling';

export interface IReadCompanySchedulesUseCase {
    execute(companyId: number): Promise<Scheduling[]>;
}
