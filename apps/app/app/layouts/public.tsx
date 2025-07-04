import PublicHeader from '@karaokems/ui/components/headers/public-header';
import { Outlet } from 'react-router';

import config from '@/app/config/config';

export default function PublicLayout() {
    return (
        <>
            <PublicHeader
                baseUrl={config.userWebBaseUrl}
                r2BaseUrl={config.r2BaseUrl}
            />
            <main className="container mx-auto py-6 px-4 min-h-[calc(100svh-140px)] md:min-h-[calc(100svh-115px)]">
                <Outlet />
            </main>
        </>
    );
}
