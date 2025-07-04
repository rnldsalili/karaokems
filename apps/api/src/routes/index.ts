import { createRouter } from '@/api/lib/create-app';

import tests from './tests';

import type { Router } from '../types/router';

const API_PREFIX = '/api';

export function registerRoutes(app: Router) {
    return app
        .route(API_PREFIX, tests);
}

// Stand alone router type used for api client
export const router = registerRoutes(createRouter());

export type APIClientRouter = typeof router;
