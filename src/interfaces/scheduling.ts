export interface ICreateScheduleRepositoryDTO {
    companyId: number;
    procedureId: number;
    agreementId: number;
    doctorId: number;
    paymentMethodId: number;
    userId: number;
    startDate: Date;
    endDate: Date;
    reason?: string;
}

export interface ICreateScheduleUseCaseDTO {
    companyId: number;
    procedureId: number;
    agreementId: number;
    paymentMethodId: number;
    doctorId: number;
    userId: number;
    date: string;
    time: string;
    timezone: string;
    reason?: string;
}

export interface ISchedulingDTO {
    id: number | string;
    startDate: string;
    endDate: string;
    status: string;
    procedures: string[];
    company: string;
}
