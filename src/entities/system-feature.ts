import { Entity } from './entity';

export interface ISystemFeatureProps {
    name: string;
    route: string;
    httpVerb: 'GET' | 'POST' | 'PUT' | 'DELETE';
}

export class SystemFeature extends Entity<ISystemFeatureProps> {
    constructor(props: ISystemFeatureProps, id?: number) {
        super(props, id);
    }

    get name(): string {
        return this.props.name;
    }

    get route(): string {
        return this.props.route;
    }

    get httpVerb(): 'GET' | 'POST' | 'PUT' | 'DELETE' {
        return this.props.httpVerb;
    }
}
