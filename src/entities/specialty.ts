import { Entity } from './entity';

export interface ISpecialtyProps {
    name: string;
    description: string;
}

export class Specialty extends Entity<ISpecialtyProps> {
    constructor(props: ISpecialtyProps, id?: number) {
        super(props, id);
    }

    get name(): string {
        return this.props.name;
    }

    get description(): string {
        return this.props.description;
    }
}
