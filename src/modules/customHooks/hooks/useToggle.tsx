import {useState, useCallback, useRef} from 'react';
import { useClickAway } from './useClickAway';

export const useToggle = <T extends HTMLElement>(): [ boolean, () => void, React.MutableRefObject<T | null>?] => {
    const [state, setState] = useState<boolean>(false);
    const ref = useRef<T | null>(null);
    const close = useCallback(() => {
        setState(false)
    }, []);

    useClickAway(state, close, ref);

    const toggle = useCallback(():void => {
        setState((curr) => !curr)
    }, []);

    return [state, toggle, ref];
}

// original code
// export const useToggle = (): [ boolean, () => void] => {
//     const [state, setState] = useState<boolean>(false);

//     const toggle = useCallback(():void => {
//         setState((curr) => !curr)
//     }, []);

//     return [state, toggle];
// }