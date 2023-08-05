import { Entity } from './entity';
import { IPersonProps } from './person';

export interface IDoctorProps extends IPersonProps {
    crm: string;
}

export class Doctor extends Entity<IDoctorProps> {
    constructor(props: IDoctorProps, id?: number) {
        super(props, id);
    }
}
