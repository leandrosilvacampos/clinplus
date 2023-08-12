import { ISchedulingRepository } from '@/repositories/scheduling';
import { IReadAvailableCompanyHoursUseCase } from '../read-available-company-hours';
import { IProcedureRepository } from '@/repositories/procedure';
import { Scheduling } from '@/entities/scheduling';
import { Procedure } from '@/entities/procedure';

export class ReadAvailableCompanyHoursUseCase implements IReadAvailableCompanyHoursUseCase {
    constructor(
        private readonly _procedureRepository: IProcedureRepository,
        private readonly _schedulingRepository: ISchedulingRepository
    ) {}

    async execute(companyId: number, date: string, procedureId: number): Promise<string[]> {
        const companySchedules: Scheduling[] = await this._schedulingRepository.readByCompanyId(companyId);
        const procedure: Procedure | null = await this._procedureRepository.readById(procedureId);

        /**
         * Procurar agendamentos dessa empresa nessa data e com base no tempo disponivel entre 8 e 18 horas, criar
         * intervalos de tempo disponiveis de acordo com a duração do procedimento.
         */

        //Pegar todos os agendamentos da empresa nessa data, subtrair os espaços de tempo ocupados pelos agendamentos do espaço de tempo de 08:00 as 18:00 e o que restar, gerar os intervalos de tempo disponiveis de acordo com a duração do procedimento.

        console.log('companySchedules: ', companySchedules);
        console.log('procedure: ', procedure);

        return [
            '08:00 - 08:45',
            '08:45 - 09:30',
            '09:30 - 10:15',
            '10:15 - 11:00',
            '11:00 - 11:45',
            '11:45 - 12:30',
            '12:30 - 13:15',
            '14:00 - 14:45',
            '14:45 - 15:30',
            '15:30 - 16:15',
            '16:15 - 17:00',
            '17:00 - 17:45',
            '17:45 - 18:30',
        ];
    }
}
