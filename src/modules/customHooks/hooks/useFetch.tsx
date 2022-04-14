import {useState, useCallback} from 'react';
import { axiosExternal } from '../../../api/axios';

export const useFetch = (): [any, boolean, string | null, (endpoint: string) => void ] => {
    const [data, setData] = useState<[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string  | null>(null);

    const fetchMethod = useCallback(async (endpoint) => {
        try {
            setIsLoading(true)
            const response = await axiosExternal.get(endpoint);

            if (response.data) {
                setData(response.data);
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false)
        }
    }, [])

    return [data, isLoading, error, fetchMethod];
}