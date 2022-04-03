import {useEffect, useState, useCallback} from 'react';
import {useFetch} from './useFetch';
import {extractNestedValue} from '../utils/functions';

interface cachedDataInterface {
    [key: string]: string
}

export const useCachedData = (cachedData: cachedDataInterface, extractProp: string) => {
    const [data, setData] = useState<string | []>('');
    const [fetchedData, error, fetchData] = useFetch();

    const myFunc = useCallback(( id: string, url: string) => {
        if (cachedData && cachedData[id]) {
            setData(cachedData[id]);

            return;
        }

        fetchData(url);
        
    }, [cachedData, extractProp])

    useEffect(() => {
        if (fetchedData) {
            const extractedValue = extractNestedValue(fetchedData, extractProp);
            
            if (extractedValue) {
                setData(extractedValue);
                cachedData[fetchedData.id] = extractedValue
            } else {
                setData(fetchedData);
                cachedData[extractProp] = fetchedData
            }
        }
    }, [fetchedData]);


    return [data, error, myFunc];
}