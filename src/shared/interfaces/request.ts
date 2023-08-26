/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IRequest {
    method: string;
    body?: any;
    params?: any;
    query?: any;
    headers?: any;
    cookies?: any;
    user?: any;
}
