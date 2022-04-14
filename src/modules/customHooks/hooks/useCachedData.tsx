import {useState, useEffect, useCallback} from 'react';
import { useFetch } from './useFetch';
import {cachedData} from '../utils/cache';
import {extractNestedValue} from '../utils/functions';

export const useCachedData = (cachedKey: string, extractProp?: string): [any, boolean, any, (endpoint: string) => void] => {
    const [data, setData] = useState<string | []>('');
    const [responseData, isLoading, error, fetchData] = useFetch();

    const getData = useCallback((endpoint) => {
        if (cachedData[cachedKey]) {
            return setData(cachedData[cachedKey])
        }

        fetchData(endpoint)
    }, [cachedKey, fetchData]);

    useEffect(() => {
        if (responseData) {
            if (extractProp) {
                const extractedValue = extractNestedValue(responseData, extractProp);
                setData(extractedValue);
                cachedData[cachedKey] = extractedValue;
            } else {
                setData(responseData);
                cachedData[cachedKey] = responseData;
            }
        }
    }, [responseData, cachedKey, extractProp]);
    // 1. if we have the data in cache object
        // - get the data from cache object

    // 2. if we don't have the data in cache object
     // - request the data
     // - store it in cache object

    return [data, isLoading, error, getData];
}