import { dataSource } from '@/data/type-orm/config/data-source';
import { ProcedureEntity } from '@/data/type-orm/entities/procedure';
import { Procedure } from '@/entities/procedure';
import { IProcedureRepository } from '@/repositories/procedure';
import { Repository } from 'typeorm';

export class TypeORMProcedureRepository implements IProcedureRepository {
    async read(): Promise<Procedure[]> {
        const procedureRepository: Repository<ProcedureEntity> = dataSource.getRepository(ProcedureEntity);

        const procedures = await procedureRepository.find();

        const mappedProcedures = procedures.map((procedure) => {
            return new Procedure(
                {
                    name: procedure.name,
                    durationTimeUnit: procedure.durationTimeUnit,
                    durationTime: procedure.durationTime,
                    type: procedure.type,
                },
                procedure.id
            );
        });

        return mappedProcedures;
    }

    async readById(procedureId: number): Promise<Procedure | null> {
        const procedureRepository: Repository<ProcedureEntity> = dataSource.getRepository(ProcedureEntity);

        const procedure: ProcedureEntity | null = await procedureRepository.findOne({
            where: {
                id: procedureId,
            },
        });

        if (!procedure) return null;

        const mappedProcedure = new Procedure(
            {
                name: procedure.name,
                durationTimeUnit: procedure.durationTimeUnit,
                durationTime: procedure.durationTime,
                type: procedure.type,
            },
            procedure.id
        );
        return mappedProcedure;
    }
}
