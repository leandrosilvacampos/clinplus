export interface IReadAvailableCompanyHoursUseCase {
    execute(params: IReadAvailableCompanyHoursUseCaseParams): Promise<string[]>;
}

export interface IReadAvailableCompanyHoursUseCaseParams {
    companyId: number;
    procedureId: number;
    date: string;
    timezone: string;
}
