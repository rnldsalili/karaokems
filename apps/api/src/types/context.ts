import { Context } from 'hono';

import { Env } from '@/api/types/env';

export type HonoContext = Context<Env>;