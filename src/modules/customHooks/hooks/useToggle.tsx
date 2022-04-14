import {useState, useCallback} from 'react';

export const useToggle = (defaultValue?: boolean): [boolean, (value?: boolean | undefined) => void] => {
    const [state, setState] = useState(typeof defaultValue === 'boolean' ? defaultValue : false);

    const toggle = useCallback((value?: boolean) => {
        setState((currentState) => typeof value === 'boolean' ? value : !currentState)
    }, []);

    return [state, toggle];
}