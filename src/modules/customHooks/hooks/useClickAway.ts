import {useEffect} from 'react';

type RefType = {
    current: HTMLElement | null
}

export const useClickAway = (ref: RefType = {current: null}, handler: () => void) => {
    useEffect(() => {
        const listener = (e: any) => {
            console.log(e)
            if (!ref.current || ref.current.contains(e.target)) {
                return;
            }
            handler()
        }

        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        }

    }, [ref, handler])
}