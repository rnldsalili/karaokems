import {
    SOMETING_WENT_WRONG,
    UNKNOWN_ERROR,
} from '@karaokems/constants/error';
import { toast } from 'sonner';

import type { ApiResult } from '../types/common';

export const handleResponseError = ({
    error,
    result,
}: {
    error?: unknown;
    result?: ApiResult;
}) => {
    if (result && 'error' in result) {
        toast.error(SOMETING_WENT_WRONG, {
            description: result.error,
        });
        return;
    }

    if (error) {
        const message = error instanceof Error ? error.message : UNKNOWN_ERROR;
        toast.error(SOMETING_WENT_WRONG, { description: message });
    }
};
