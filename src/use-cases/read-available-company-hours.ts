export interface IReadAvailableCompanyHoursUseCase {
    execute(companyId: number, scheduleDate: string, procedureId: number): Promise<string[]>;
}
