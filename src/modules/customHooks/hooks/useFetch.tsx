import {useState, useCallback} from 'react';
import { axiosExternal } from '../../../api/axios';

export const useFetch = () => {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<string>('');

    const fetchData = useCallback(async (endpoint) => {
        try {
            const response = await axiosExternal.get(endpoint);

            if (response.data) {
                setData(response.data);
            }
        } catch (err: any) {
            setError('Something went wrong.')
        }
    }, [])

    return [data, error, fetchData]
}