import { IAgreementDTO } from './agreement';
import { IPaymentMethodDTO } from './payment-method';

export interface ICompanyDTO {
    id: number;
    fantasyName: string;
    companyName: string;
    agreements?: IAgreementDTO[];
    paymentMethods?: IPaymentMethodDTO[];
}
