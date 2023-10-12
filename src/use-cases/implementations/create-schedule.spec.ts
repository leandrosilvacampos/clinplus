import { it, expect, vi, beforeEach, afterEach } from 'vitest';

import { ISchedulingRepository } from '@/repositories/scheduling';
import { describe } from 'node:test';
import { Scheduling } from '@/entities/scheduling';
import { ICreateScheduleUseCase } from '../create-schedule';
import { CreateScheduleUseCase } from './create-schedule';
import { IReadAvailableCompanyHoursUseCase } from '../read-available-company-hours';

interface ISut {
    readAvailableCompanyHoursUseCase: IReadAvailableCompanyHoursUseCase;
    schedulingRepository: ISchedulingRepository;
    sut: ICreateScheduleUseCase;
}

const makeSut = (): ISut => {
    const readAvailableCompanyHoursUseCase: IReadAvailableCompanyHoursUseCase = {
        execute: vi.fn(),
    };

    const schedulingRepository: ISchedulingRepository = {
        read: vi.fn(),
        readByCompanyId: vi.fn(),
        readByUserId: vi.fn(),
        create: vi.fn(),
    };

    const sut = new CreateScheduleUseCase(readAvailableCompanyHoursUseCase, schedulingRepository);

    return {
        readAvailableCompanyHoursUseCase,
        schedulingRepository,
        sut,
    };
};

describe('CreateScheduleUseCase', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    // success
    it('should schedule successfully', async () => {
        const { sut, readAvailableCompanyHoursUseCase } = makeSut();

        const date = new Date('2023-08-12T16:00:00.000Z');
        vi.setSystemTime(date);

        vi.spyOn(readAvailableCompanyHoursUseCase, 'execute').mockResolvedValueOnce(['11:00 - 11:30']);

        const result = () =>
            sut.execute({
                companyId: 1,
                procedureId: 1,
                agreementId: 1,
                paymentMethodId: 1,
                doctorId: 1,
                userId: 1,
                date: '2023-08-12',
                time: '11:00 - 11:30',
                timezone: 'America/Sao_Paulo',
                reason: 'Dor nas costas',
            });

        expect(result()).resolves.not.toThrow();
    });

    it('should throw an error when time is not available', async () => {
        const { sut, readAvailableCompanyHoursUseCase } = makeSut();

        const date = new Date('2023-08-12T16:00:00.000Z');
        vi.setSystemTime(date);

        vi.spyOn(readAvailableCompanyHoursUseCase, 'execute').mockResolvedValueOnce(['12:00 - 12:30']);

        const result = () =>
            sut.execute({
                companyId: 1,
                procedureId: 1,
                agreementId: 1,
                paymentMethodId: 1,
                doctorId: 1,
                userId: 1,
                date: '2023-08-12',
                time: '11:00 - 11:30',
                timezone: 'America/Sao_Paulo',
                reason: 'Dor nas costas',
            });

        expect(result()).rejects.toThrow(new Error('This hour is not available'));
    });
});
