export interface ICreateScheduleRepositoryDTO {
    companyId: number;
    procedureId: number;
    agreementId: number;
    paymentId: number;
    startDate: Date;
    endDate: Date;
    reason?: string;
}

export interface ICreateScheduleUseCaseDTO {
    companyId: number;
    procedureId: number;
    agreementId: number;
    paymentId: number;
    date: string;
    time: string;
    timezone: string;
    reason?: string;
}
