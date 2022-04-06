export enum CounterActions {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    SET = 'SET'
}

interface actionTypeIncrement {
    type: CounterActions.INCREMENT;
}

interface actionTypeDecrement {
    type: CounterActions.DECREMENT;
}

interface actionTypeSet {
    type: CounterActions.SET;
    payload: number;
}

export const [increment, decrement, set] = [
    () => ({type: CounterActions.INCREMENT}),
    () => ({type: CounterActions.DECREMENT}),
    (value: number) => ({type: CounterActions.SET, payload: value}),
];

export type CounterAction = actionTypeDecrement | actionTypeIncrement | actionTypeSet;

