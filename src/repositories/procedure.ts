import { Procedure } from '@/entities/procedure';

export interface IProcedureRepository {
    read(): Promise<Procedure[]>;
    readById(procedureId: number): Promise<Procedure | null>;
}
