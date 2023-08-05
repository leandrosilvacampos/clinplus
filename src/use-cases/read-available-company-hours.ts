export class ReadAvailableCompanyHoursUseCase {
    async execute(companyId: number, date: string): Promise<string[]> {
        console.log('Date: ' + date);
        console.log('Company ID: ' + companyId);

        return ['13:00 - 13:45', '13:45 - 14:30'];
    }
}
