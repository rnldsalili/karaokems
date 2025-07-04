/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCode } from '@karaokems/enums/status-code';
import { commonGetListSchema } from '@karaokems/validators/common/request';

import { createHonoFactory } from '@/api/lib/create-app';
import { sleep } from '@/api/lib/utils';
import { zValidator } from '@/api/lib/validator';

const factory = createHonoFactory();

export const getTests = factory.createHandlers(
    zValidator('query', commonGetListSchema),
    async (c) => {
        await sleep(3000);

        return c.json({
            status: StatusCode.OK,
            data: {
                message: 'Get test list success',
            },
        });
    },
);

export const getTest = factory.createHandlers(
    zValidator('param', commonGetListSchema),
    async (c) => {
        // Add logic here
    },
);

export const createTest = factory.createHandlers(
    zValidator('json', commonGetListSchema),
    async (c) => {
        // Add logic here
    },
);

export const updateTest = factory.createHandlers(
    zValidator('param', commonGetListSchema),
    zValidator('json', commonGetListSchema),
    async (c) => {
        // Add logic here
    },
);

export const deleteTest = factory.createHandlers(
    zValidator('param', commonGetListSchema),
    async (c) => {
        // Add logic here
    },
);
