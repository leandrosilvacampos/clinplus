export interface IReadAvailableCompanyHoursUseCase {
    execute(companyId: number, date: string, procedureId: number): Promise<string[]>;
}
