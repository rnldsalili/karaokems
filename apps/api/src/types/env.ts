export type Bindings = {
    ASSETS: Fetcher;
    ENV: string;
    DOMAIN: string;
    RATE_WINDOW_MS: number;
    RATE_LIMIT: number;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type Variables = {};

export type Env = { Bindings: Bindings; Variables: Variables };
