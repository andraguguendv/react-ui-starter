import {getTransaction} from "./utils";

export enum TransactionsActions {
    GET_TRANSACTIONS = '[Transactions] Get transactions',
    GET_TRANSACTIONS_SUCCESS = '[Transactions] Get transactions success',
    GET_TRANSACTIONS_ERROR = '[Transactions] Get transactions error',
}


export function fetchTransactions() {
    return (dispatch: any) => {
        dispatch({
            type: TransactionsActions.GET_TRANSACTIONS
        });

        getTransaction().then(({data: {data: transactions}}) => {
            dispatch({
                type: TransactionsActions.GET_TRANSACTIONS_SUCCESS,
                payload: transactions
            })
        }).catch((err) => {
            dispatch({
                type: TransactionsActions.GET_TRANSACTIONS_ERROR,
                payload: err
            })
        })


    }
}
