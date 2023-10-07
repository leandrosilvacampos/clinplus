import { TypeORMSpecialtyRepository } from '@/repositories/implementations/type-orm/specialty';
import { ISpecialtyRepository } from '@/repositories/specialty';

export const makeSpecialtyRepository = (): ISpecialtyRepository => {
    const specialtyRepository: ISpecialtyRepository = new TypeORMSpecialtyRepository();

    return specialtyRepository;
};
