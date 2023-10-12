import { it, expect, vi, beforeEach, afterEach } from 'vitest';
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
        readByUserId: vi.fn(),
        create: vi.fn(),
    };

    const sut = new ReadAvailableCompanyHoursUseCase(procedureRepository, schedulingRepository);

    return {
        procedureRepository,
        schedulingRepository,
        sut,
    };
};

describe('ReadAvailableCompanyHoursUseCase', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('should return available hours', async () => {
        const { sut, procedureRepository, schedulingRepository } = makeSut();

        const date = new Date('2023-08-12T16:00:00.000Z');
        vi.setSystemTime(date);

        vi.spyOn(procedureRepository, 'readById').mockResolvedValueOnce(
            new Procedure(
                {
                    name: 'Procedure 1',
                    durationTime: 30,
                    durationTimeUnit: 'minutes',
                    type: 'consultation',
                },
                1
            )
        );

        vi.spyOn(schedulingRepository, 'readByCompanyId').mockResolvedValueOnce([
            new Scheduling(
                {
                    startDate: new Date('2023-08-12T16:00:00.000Z'),
                    endDate: new Date('2023-08-12T16:30:00.000Z'),
                    status: 'scheduled',
                },
                1
            ),
            new Scheduling(
                {
                    startDate: new Date('2023-08-12T18:30:00.000Z'),
                    endDate: new Date('2023-08-12T19:00:00.000Z'),
                    status: 'scheduled',
                },
                1
            ),
        ]);

        const result = await sut.execute({ companyId: 1, procedureId: 1, date: '2023-08-12', timezone: 'UTC' });

        expect(result).toEqual([
            '11:00 - 11:30',
            '11:35 - 12:05',
            '12:10 - 12:40',
            '12:45 - 13:15',
            '13:20 - 13:50',
            '13:55 - 14:25',
            '14:30 - 15:00',
            '15:05 - 15:35',
            '16:50 - 17:20',
            '17:25 - 17:55',
            '18:00 - 18:30',
            '19:10 - 19:40',
            '19:45 - 20:15',
            '20:20 - 20:50',
        ]);
    });
});
