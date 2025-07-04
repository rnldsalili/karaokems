import { Hono } from 'hono';
import { StatusCode } from '@karaokems/enums/status-code';
import { cors } from 'hono/cors';
import { createFactory } from 'hono/factory';
import { logger } from 'hono/logger';

import checkSpamRequest from '@/api/middlewares/checkSpamRequest';

import type { Env } from '@/api/types/env';

export const createRouter = () => {
    return new Hono<Env>();
};

export const createHonoFactory = () => {
    return createFactory<Env>();
};

const createApp = () => {
    const app = createRouter();

    app.use(
        '*',
        cors({
            credentials: true,
            allowMethods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
            origin: (origin, c) => {
                if (
                    c.env.ENV === 'development' ||
                    origin.endsWith(c.env.DOMAIN)
                ) {
                    return origin;
                }

                return null;
            },
        }),
    );

    // app.use('*', checkSpamRequest);

    app.use(logger());

    // Route not found
    app.notFound((c) => {
        return c.json(
            {
                status: StatusCode.NOT_FOUND,
                error: '404 Not Found',
            },
            StatusCode.NOT_FOUND,
        );
    });

    // Internal Server Error
    app.onError((error, c) => {
        console.error('[!!!] Internal Server Error:', error);
        return c.json(
            {
                status: StatusCode.INTERNAL_SERVER_ERROR,
                error: error.message,
            },
            StatusCode.INTERNAL_SERVER_ERROR,
        );
    });

    return app;
};

export default createApp;
