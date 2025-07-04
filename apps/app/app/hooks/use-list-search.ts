import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

import config from '@/app/config/config';

import { getSearchParamsFromUrl, objectToSearchParamString } from '@karaokems/ui/lib/utils';

export function useListSearch() {
    const navigate = useNavigate();
    const location = useLocation();
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            const searchParams = getSearchParamsFromUrl();
            const newSearchParams: {
                [key: string]: unknown,
                search?: string
            } = {
                ...searchParams,
                search,
            };

            if (!search) {
                delete newSearchParams.search;
            }

            const searchParamString = objectToSearchParamString(newSearchParams);

            if (!searchParamString) {
                navigate(location.pathname);
                return;
            }

            navigate(searchParamString);
        }, config.debounceTtl);

        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    const handleOnSearch = (key: string, value: string | number) => {
        const searchParams = getSearchParamsFromUrl();
        const searchParamString = objectToSearchParamString({
            ...searchParams,
            [key]: value,
        });

        navigate(searchParamString);
    };

    const removeKeyOnSearch = (key: string) => {
        const searchParams = getSearchParamsFromUrl();
        const newSearchParams = { ...searchParams };

        delete newSearchParams[key];

        const searchParamString = objectToSearchParamString(newSearchParams);

        if (!searchParamString) {
            navigate(location.pathname);
            return;
        }

        navigate(searchParamString);
    };

    return { handleOnSearch, removeKeyOnSearch, search, setSearch };
}

