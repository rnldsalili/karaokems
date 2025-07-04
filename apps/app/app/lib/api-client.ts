import createClient from '@karaokems/api-client';

import config from '@/app/config/config';

export default createClient(config.apiBaseUrl).api;
