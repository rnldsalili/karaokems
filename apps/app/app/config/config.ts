const config = {
    // Common
    env: import.meta.env.VITE_ENV || 'development',
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
    debounceTtl: 500,
};

export default config;
