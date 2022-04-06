import {useSelector} from "react-redux";
import {useActions} from "./useActions";
import {decrement, increment, set} from "../store/counter/counter.actions";
import {useMemo} from "react";

export const useCounter = () => {
    const count = useSelector((state: any) => state.counter.count);

    const actions = useActions({increment, decrement, set});

    return useMemo(() => {
        return {count, ...actions}
    }, [count, actions])

}
