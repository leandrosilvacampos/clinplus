export interface ICreateScheduleRepositoryDTO {
    companyId: number;
    procedureId: number;
    agreementId: number;
    paymentMethodId: number;
    startDate: Date;
    endDate: Date;
    reason?: string;
}

export interface ICreateScheduleUseCaseDTO {
    companyId: number;
    procedureId: number;
    agreementId: number;
    paymentMethodId: number;
    date: string;
    time: string;
    timezone: string;
    reason?: string;
}
