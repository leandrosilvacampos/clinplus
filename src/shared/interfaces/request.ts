/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IRequest {
    method: string;
    baseUrl: string;
    routePath: string;
    body?: any;
    params?: any;
    query?: any;
    headers?: any;
    cookies?: any;
    data?: any;
}
