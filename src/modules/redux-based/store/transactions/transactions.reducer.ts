import {ADD_TRANSACTION, GET_TRANSACTION, GET_TRANSACTIONS} from "./transactions.actions";

export const initialState = {
    transactions: []
};

export const reducer = (state = initialState, action:any) => {
    if (action.type === GET_TRANSACTIONS) {
        return {transactions: []};
    }

    if (action.type === ADD_TRANSACTION) {
        return {transactions: []};
    }

    if (action.type === GET_TRANSACTION) {
        return {transactions: []};
    }

    return state;
};
