// actions creators
import {getTransactions} from "./utils/fetchTransactions";

export function fetchTransactions() {
    return (dispatch: any) => {
        dispatch({
            type: TransactionsActions.GET_TRANSACTIONS
        });

        getTransactions().then(({data: {data: transactions}}) => {
            console.log(transactions, 'dataaa');
            dispatch({
                type: TransactionsActions.GET_TRANSACTIONS_SUCCESS,
                payload: transactions
            })
        }).catch()
    }
};
export const getTransactionsSuccess = (transactions: Array<any>) => ({
    type: TransactionsActions.GET_TRANSACTIONS_SUCCESS, payload: transactions
});
export const getTransactionsError = (err: any) => ({type: TransactionsActions.GET_TRANSACTIONS_ERROR, payload: err});


export enum TransactionsActions {
    GET_TRANSACTIONS = '[Transactions] Get transactions',
    GET_TRANSACTIONS_SUCCESS = '[Transactions] Get transactions success',
    GET_TRANSACTIONS_ERROR = '[Transactions] Get transactions error',
}
