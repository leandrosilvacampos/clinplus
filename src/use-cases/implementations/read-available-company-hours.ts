import { ISchedulingRepository } from '@/repositories/scheduling';
import { IReadAvailableCompanyHoursUseCase } from '../read-available-company-hours';
import { IProcedureRepository } from '@/repositories/procedure';
import { Scheduling } from '@/entities/scheduling';
import { Procedure } from '@/entities/procedure';
import { add, format, areIntervalsOverlapping } from 'date-fns';

export class ReadAvailableCompanyHoursUseCase implements IReadAvailableCompanyHoursUseCase {
    constructor(
        private readonly _procedureRepository: IProcedureRepository,
        private readonly _schedulingRepository: ISchedulingRepository
    ) {}

    async execute(companyId: number, scheduleDate: string, procedureId: number): Promise<string[]> {
        const companySchedules: Scheduling[] = await this._schedulingRepository.readByCompanyId(companyId);
        const procedure: Procedure | null = await this._procedureRepository.readById(procedureId);

        if (!procedure) {
            throw new Error('Procedure not found');
        }

        this._checkDate(scheduleDate);

        const now = new Date();

        const startOfWorkingHours = new Date(`${scheduleDate}T11:00:00.000Z`);
        const endOfWorkingHours = new Date(`${scheduleDate}T21:00:00.000Z`);

        const gapInMinutes = 5;

        console.log('startOfWorkingHours', startOfWorkingHours);
        console.log('endOfWorkingHours', endOfWorkingHours);
        console.log('now', now);

        const baseData = now < startOfWorkingHours ? startOfWorkingHours : now;
        const baseDataWithGap = add(baseData, { minutes: gapInMinutes });

        console.log('baseData', baseData);
        console.log('baseDataWithGap', baseDataWithGap);

        const busyIntervals: { start: Date; end: Date }[] = companySchedules.map((schedule) => ({
            start: schedule.startDate,
            end: schedule.endDate,
        }));

        const possibleIntervals: { start: Date; end: Date }[] = [];

        let lastEndDate = baseDataWithGap;

        while (lastEndDate < endOfWorkingHours) {
            const startDate = lastEndDate;
            const endDate = add(startDate, { minutes: procedure.durationTimeInMinutes });

            if (endDate > endOfWorkingHours) {
                break;
            }

            const interval = { start: startDate, end: endDate };

            possibleIntervals.push(interval);
            lastEndDate = endDate;
        }

        const availableIntervals: { start: Date; end: Date }[] = possibleIntervals.filter(
            (interval) => !busyIntervals.some((busyInterval) => areIntervalsOverlapping(interval, busyInterval))
        );

        const formattedAvailableIntervals = availableIntervals.map(
            (interval) => `${format(interval.start, 'HH:mm')} - ${format(interval.end, 'HH:mm')}`
        );

        console.log('busyIntervals', busyIntervals);
        console.log('possibleIntervals', possibleIntervals);
        console.log('availableIntervals', availableIntervals);

        return formattedAvailableIntervals;
    }

    private _checkDate(date: string): void {
        const datePattern = /^\d{4}-\d{2}-\d{2}$/;

        if (!datePattern.test(date)) {
            throw new Error('Date is not valid');
        }
    }
}
