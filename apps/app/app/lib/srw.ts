/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'sonner';

import type {
    InferRequestType,
    InferResponseType,
} from '@karaokems/api-client';

export function createFetcher<T extends (args: any) => Promise<Response>>(
    requestFn: T,
    args?: InferRequestType<T>,
): () => Promise<InferResponseType<T>> {
    return async () => {
        try {
            const response = await requestFn(args);
            const result = await response.json();

            if (result.status !== 200) {
                toast.error('Error', {
                    description: result?.error || 'Something went wrong',
                });
            }

            return result;
        } catch (error: any) {
            toast.error('Error', {
                description: error?.message || 'Something went wrong',
            });

            throw error;
        }
    };
}
