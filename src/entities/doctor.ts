import { IEntity } from './entity';
import { IPersonProps } from './person';

export interface IDoctorProps extends IPersonProps {
    crm: string;
}

export class Doctor extends IEntity<IDoctorProps> {
    constructor(props: IDoctorProps, id?: number) {
        super(props, id);
    }
}
