import {useState, useCallback} from 'react';

export const useToggle = (): [boolean, () => void] => {
    const [state, setState] = useState<boolean>(false);

    const toggle = useCallback(():void => {
        setState((curr) => !curr)
    }, []);

    return [state, toggle];
}