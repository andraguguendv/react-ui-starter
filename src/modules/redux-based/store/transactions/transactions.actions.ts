export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const GET_TRANSACTION = 'GET_TRANSACTION';

export const getTransactions = () => ({type: GET_TRANSACTIONS});
export const addTransaction = () => ({type: ADD_TRANSACTION});
export const getTransaction = (value: any) => ({type: GET_TRANSACTION, payload: value});
