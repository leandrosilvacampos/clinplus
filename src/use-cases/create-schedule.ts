import { Scheduling } from '@/entities/scheduling';
import { ICreateScheduleUseCaseDTO } from '@/interfaces/scheduling';

export interface ICreateScheduleUseCase {
    execute(params: ICreateScheduleUseCaseDTO): Promise<Scheduling>;
}
