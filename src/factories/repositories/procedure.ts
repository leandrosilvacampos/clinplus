import { IProcedureRepository } from '@/repositories/procedure';
import { TypeORMProcedureRepository } from '@/repositories/implementations/type-orm/procedure';

export const makeProcedureRepository = (): IProcedureRepository => {
    const procedureRepository: IProcedureRepository = new TypeORMProcedureRepository();

    return procedureRepository;
};
