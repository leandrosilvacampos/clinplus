import { IEntity } from './entity';
import { IPersonProps } from './person';

export interface IPatientProps extends IPersonProps {
    crm: string;
}

export class Patient extends IEntity<IPatientProps> {
    constructor(props: IPatientProps, id?: number) {
        super(props, id);
    }
}
