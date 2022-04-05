import {useState, useCallback, useEffect} from 'react';

export const useClickAway = <T extends HTMLElement>(isOpen: boolean, handler: () => void, ref?: React.MutableRefObject<T | null>,) => {
    const [isEventAdded, setIsEventAdded] = useState(false);

    const close = useCallback((e: Event) => {
        if (!ref?.current?.contains(e.target as Node)) {
            handler();
        }
    }, [handler, ref]);

    useEffect(() => {
        if (isOpen) {
            if (ref?.current) {

                setIsEventAdded(true);
                document.addEventListener('click', close)
            }
        } else if (isEventAdded) {

            document.removeEventListener('click', close)
            setIsEventAdded(false)
        }
    }, [isOpen, ref, close]);


    return () => {
        document.removeEventListener('click', close)
    }
}
