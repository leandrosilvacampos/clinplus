import { ISchedulingRepository } from '@/repositories/scheduling';
import { TypeORMSchedulingRepository } from '@/repositories/implementations/type-orm/scheduling';

export const makeSchedulingRepository = (): ISchedulingRepository => {
    const schedulingRepository: ISchedulingRepository = new TypeORMSchedulingRepository();

    return schedulingRepository;
};
