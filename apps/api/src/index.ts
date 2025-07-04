import { registerRoutes } from '@/api//routes';
import createApp from '@/api/lib/create-app';

const app = registerRoutes(createApp());

export default app;