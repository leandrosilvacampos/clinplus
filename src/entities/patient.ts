import { Entity } from './entity';
import { IPersonProps } from './person';

export interface IPatientProps extends IPersonProps {
    crm: string;
}

export class Patient extends Entity<IPatientProps> {
    constructor(props: IPatientProps, id?: number) {
        super(props, id);
    }
}
