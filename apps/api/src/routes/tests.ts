import { getTests } from '@/api/handlers/tests';
import { createRouter } from '@/api/lib/create-app';

const userWebTests = createRouter()
    .basePath('/tests')
    .get('/', ...getTests);

export default userWebTests;
