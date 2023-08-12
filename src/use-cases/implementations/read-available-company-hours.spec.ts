import { it, expect, vi } from 'vitest';
import { IReadAvailableCompanyHoursUseCase } from '../read-available-company-hours';
import { ReadAvailableCompanyHoursUseCase } from './read-available-company-hours';
import { ISchedulingRepository } from '@/repositories/scheduling';
import { IProcedureRepository } from '@/repositories/procedure';
import { describe } from 'node:test';
import { Procedure } from '@/entities/procedure';
import { Scheduling } from '@/entities/scheduling';

interface ISut {
    procedureRepository: IProcedureRepository;
    schedulingRepository: ISchedulingRepository;
    sut: IReadAvailableCompanyHoursUseCase;
}

const makeSut = (): ISut => {
    const procedureRepository: IProcedureRepository = {
        read: vi.fn(),
        readById: vi.fn(),
    };

    const schedulingRepository: ISchedulingRepository = {
        read: vi.fn(),
        readByCompanyId: vi.fn(),
    };

    const sut = new ReadAvailableCompanyHoursUseCase(procedureRepository, schedulingRepository);

    return {
        procedureRepository,
        schedulingRepository,
        sut,
    };
};

describe('ReadAvailableCompanyHoursUseCase', () => {
    it('should return available hours', async () => {
        const { sut, procedureRepository, schedulingRepository } = makeSut();

        vi.spyOn(procedureRepository, 'readById').mockResolvedValueOnce(
            new Procedure(
                {
                    name: 'Procedure 1',
                    durationTime: 45,
                    durationTimeUnit: 'minutes',
                    type: 'consultation',
                },
                1
            )
        );

        vi.spyOn(schedulingRepository, 'readByCompanyId').mockResolvedValueOnce([
            new Scheduling(
                {
                    startDate: new Date('2023-08-12 13:15:00'),
                    endDate: new Date('2023-08-12 14:00:00'),
                },
                1
            ),
        ]);

        const result = await sut.execute(1, '2023-08-12', 1);

        expect(result).toEqual([
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
        ]);
    });
});
