
import { hc } from 'hono/client';
import ky from 'ky';

import type { APIClientRouter } from '@karaokems/api/routes';
import type {
    InferRequestType as HonoInferRequestType,
    InferResponseType as HonoInferResponseType,
    ClientResponse as HonoClientResponse,
} from 'hono/client';

const kyApi = ky.extend({
    throwHttpErrors: false,
    timeout: 30000,
});

const createClient = (...args: Parameters<typeof hc>) => {
    const [baseURL, options] = args;

    return hc<APIClientRouter>(baseURL, {
        fetch: (input: RequestInfo | URL, requestInit?: RequestInit) => {
            return kyApi(`${input}`, {
                method: requestInit?.method,
                headers: {
                    ...requestInit?.headers,
                    'Content-Type': 'application/json',
                },
                body: requestInit?.body,
            });
        },
        ...options,
    });
};

export type Client = ReturnType<typeof createClient>;

export type InferRequestType<T> = HonoInferRequestType<T>;

export type InferResponseType<T> = HonoInferResponseType<T>;

export type ClientResponse<T> = HonoClientResponse<T>;

export type ApiError = {
    error:
    | string
    | {
        issues: {
            code: string;
            expected: string;
            message: string;
            path: string[];
            received: string;
        }[];
        name: string;
    };
    status: number;
};

export default createClient;
