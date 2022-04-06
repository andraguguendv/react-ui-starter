import {CounterAction, CounterActions} from "./counter.actions";

export const initialState = {count: 0};

export const reducer = (state = initialState, action: CounterAction) => {
    if (action.type === CounterActions.INCREMENT) {
        return {
            count: state.count + 1
        }
    }

    if (action.type === CounterActions.DECREMENT) {
        return {
            count: state.count - 1
        }
    }

    if (action.type === CounterActions.SET) {
        return {
            count: action.payload
        }
    }

    return {...state};

}
