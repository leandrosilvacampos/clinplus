import { ISchedulingRepository } from '@/repositories/scheduling';
import { IReadAvailableCompanyHoursUseCase, IReadAvailableCompanyHoursUseCaseParams } from '../read-available-company-hours';
import { IProcedureRepository } from '@/repositories/procedure';
import { Scheduling } from '@/entities/scheduling';
import { Procedure } from '@/entities/procedure';
import { add, format, areIntervalsOverlapping } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export class ReadAvailableCompanyHoursUseCase implements IReadAvailableCompanyHoursUseCase {
    constructor(
        private readonly _procedureRepository: IProcedureRepository,
        private readonly _schedulingRepository: ISchedulingRepository
    ) {}

    async execute({ companyId, procedureId, date, timezone }: IReadAvailableCompanyHoursUseCaseParams): Promise<string[]> {
        const companySchedules: Scheduling[] = await this._schedulingRepository.readByCompanyId(companyId);
        const procedure: Procedure | null = await this._procedureRepository.readById(procedureId);

        if (!procedure) {
            throw new Error('Procedure not found');
        }

        this._checkDate(date);

        const now = new Date();

        const startOfWorkingHours = new Date(`${date}T11:00:00.000Z`);
        const endOfWorkingHours = new Date(`${date}T21:00:00.000Z`);

        const gapInMinutes = 5;

        const baseData = now < startOfWorkingHours ? startOfWorkingHours : now;

        const busyIntervals: { start: Date; end: Date }[] = companySchedules.map((schedule) => ({
            start: schedule.startDate,
            end: schedule.endDate,
        }));

        const possibleIntervals: { start: Date; end: Date }[] = [];

        let lastEndDate = baseData;

        while (lastEndDate < endOfWorkingHours) {
            const startDate = lastEndDate === baseData ? lastEndDate : add(lastEndDate, { minutes: gapInMinutes });
            const endDate = add(startDate, { minutes: procedure.durationTimeInMinutes });

            if (endDate > endOfWorkingHours) {
                break;
            }

            const interval = { start: startDate, end: endDate };

            possibleIntervals.push(interval);
            lastEndDate = endDate;
        }

        const availableIntervals: { start: Date; end: Date }[] = possibleIntervals.filter(
            (interval) =>
                !busyIntervals.some((busyInterval) => {
                    try {
                        return areIntervalsOverlapping(interval, busyInterval);
                    } catch (error) {
                        return false;
                    }
                })
        );

        const formattedAvailableIntervals = availableIntervals.map((interval) => {
            const startTime = format(utcToZonedTime(interval.start, timezone), 'HH:mm');
            const endTime = format(utcToZonedTime(interval.end, timezone), 'HH:mm');
            return `${startTime} - ${endTime}`;
        });

        return formattedAvailableIntervals;
    }

    private _checkDate(date: string): void {
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;

        if (!datePattern.test(date)) {
            throw new Error('Date is not valid');
        }
    }
}
