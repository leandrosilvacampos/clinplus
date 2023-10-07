/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISchedulingRepository } from '@/repositories/scheduling';
import { Scheduling } from '@/entities/scheduling';
import { ICreateScheduleUseCase } from '../create-schedule';
import { ICreateScheduleUseCaseDTO } from '@/interfaces/scheduling';
import { IReadAvailableCompanyHoursUseCase } from '../read-available-company-hours';
import { zonedTimeToUtc } from 'date-fns-tz';

export class CreateScheduleUseCase implements ICreateScheduleUseCase {
    constructor(
        private readonly _readAvailableCompanyHoursUseCase: IReadAvailableCompanyHoursUseCase,
        private readonly _schedulingRepository: ISchedulingRepository
    ) {}

    async execute({
        companyId,
        paymentMethodId,
        agreementId,
        procedureId,
        doctorId,
        userId,
        reason,
        date,
        time,
        timezone,
    }: ICreateScheduleUseCaseDTO): Promise<Scheduling> {
        const availableHours: string[] = await this._readAvailableCompanyHoursUseCase.execute({
            companyId,
            procedureId,
            date,
            timezone,
        });

        if (!availableHours.includes(time)) {
            throw new Error('This hour is not available');
        }

        const splittedTime = time.replace(/\s/g, '').split('-');

        const startDate: Date = zonedTimeToUtc(`${date} ${splittedTime[0]}:00`, timezone);

        const endDate: Date = zonedTimeToUtc(`${date} ${splittedTime[1]}:00`, timezone);

        const scheduling = await this._schedulingRepository.create({
            companyId,
            paymentMethodId,
            agreementId,
            procedureId,
            doctorId,
            userId,
            reason,
            startDate,
            endDate,
        });

        return scheduling;
    }
}
