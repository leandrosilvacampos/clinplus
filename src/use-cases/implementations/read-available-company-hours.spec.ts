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
                },
                1
            ),
            new Scheduling(
                {
                    startDate: new Date('2023-08-12T18:30:00.000Z'),
                    endDate: new Date('2023-08-12T19:00:00.000Z'),
                },
                1
            ),
        ]);

        const result = await sut.execute({ companyId: 1, procedureId: 1, date: '2023-08-12', timezone: 'UTC' });

        expect(result).toEqual(['16:35 - 17:05', '17:10 - 17:40', '17:45 - 18:15', '19:30 - 20:00', '20:05 - 20:35']);
    });
});
