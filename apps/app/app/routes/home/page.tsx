import { formatMetaTitle } from '@karaokems/ui/lib/utils';

export function meta() {
    return [{ title: formatMetaTitle('Home') }];
}

export default function Home() {
    return <>Hello ronald!</>;
}
