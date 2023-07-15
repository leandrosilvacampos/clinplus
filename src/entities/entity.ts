import crypto from 'crypto';

export abstract class IEntity<T> {
    protected _id: number | string;
    private props: T;

    constructor(props: T, id?: number | string) {
        this._id = id || crypto.randomUUID();
        this.props = props;
    }

    get id(): number | string {
        return this._id;
    }
}
