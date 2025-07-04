import { StatusCode } from '@karaokems/enums/status-code';
import { createFactory } from 'hono/factory';

import type { Env } from '@/api/types/env';

const factory = createFactory<Env>();

type KvRateLimitData = {
    count: number;
    lastRequest: number;
};

export default factory.createMiddleware(async (c, next) => {
    const ip =
        c.req.header('CF-Connecting-IP') ||
        c.req.header('x-forwarded-for') ||
        'unknown';
    const key = `rate_limit_${ip}`;

    const currentTime = Date.now();
    const timeWindow = c.env.RATE_WINDOW_MS; // Default to 1 minute if not set
    const requestLimit = c.env.RATE_LIMIT;

    const kv = c.env.KV;

    // Retrieve the current count and timestamp from KV
    const data: KvRateLimitData = (await kv.get(key, { type: 'json' })) || {
        count: 0,
        lastRequest: Date.now(),
    };

    if (currentTime - data.lastRequest < timeWindow) {
        // If within the time window, increment count
        if (data.count >= requestLimit) {
            return c.json(
                {
                    status: StatusCode.TOO_MANY_REQUESTS,
                    error: 'Too Many Requests',
                },
                StatusCode.TOO_MANY_REQUESTS,
            );
        }

        data.count++;
    } else {
        // Reset count if outside time window
        data.count = 1;
        data.lastRequest = currentTime;
    }

    // Store updated count and timestamp
    await kv.put(key, JSON.stringify(data), {
        expirationTtl: timeWindow / 1000,
    });

    await next();
});
