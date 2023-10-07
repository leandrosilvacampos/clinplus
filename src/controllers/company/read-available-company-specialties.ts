import { ISpecialtyDTO } from '@/interfaces/specialty';
import { IController } from '@/shared/interfaces/controller';
import { IRequest } from '@/shared/interfaces/request';
import { IResponse } from '@/shared/interfaces/response';
import { IReadAvailableCompanySpecialtiesUseCase } from '@/use-cases/read-available-company-specialties';

export class ReadAvailableCompanySpecialtiesController implements IController {
    constructor(private readonly _readAvailableCompanySpecialtiesUseCase: IReadAvailableCompanySpecialtiesUseCase) {}

    async handle(req: IRequest): Promise<IResponse> {
        const id = Number(req.params.id);

        const availableSpecialties: ISpecialtyDTO[] = await this._readAvailableCompanySpecialtiesUseCase.execute(id);

        return { status: 200, body: availableSpecialties };
    }
}
