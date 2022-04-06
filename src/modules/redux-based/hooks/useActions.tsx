import {useDispatch} from "react-redux";
import {useMemo} from 'react';
import {bindActionCreators} from "redux";


export function useActions(actions: any) {
    const dispatch = useDispatch();

    return useMemo(() => {
        return bindActionCreators(actions, dispatch)
    }, [actions, dispatch]);
}
