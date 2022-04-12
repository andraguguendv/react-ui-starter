import {TransactionsActions} from "./transactions.actions";
import {DomainStatus} from "../../../../models/store/domain-status.model";
import {Transaction} from "../../models/transaction";
import {initialRequestStatus} from "../../../../models/store/request-status.model";
import {StoreReqStatus} from "../../../../models/store/status.model";


export interface TransactionsState {
    transactions: DomainStatus<Array<Transaction>>;
}


export const initialState = {
    transactions: {
        domain: [],
        requestStatus: initialRequestStatus
    }
}

export const selectTransactions = (state: any) => {
    return state.transactionsState?.transactions?.domain;
}


export const selectTransactionsRequestStatus = (state: any) => {
    return state.transactionsState?.transactions?.requestStatus;
}

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TransactionsActions.GET_TRANSACTIONS: {
            return {
                transactions: {
                    ...state.transactions,
                    requestStatus: {
                        status: StoreReqStatus.PENDING,
                        errorNotification: null
                    }
                }
            }
        }

        case TransactionsActions.GET_TRANSACTIONS_SUCCESS: {
            return {
                transactions: {
                    domain: action.payload,
                    requestStatus: {
                        status: StoreReqStatus.COMPLETED,
                        errorNotification: null
                    }
                }
            }
        }

        case TransactionsActions.GET_TRANSACTIONS_ERROR: {

            return {
                transactions: {
                    domain: [],
                    requestStatus: {
                        status: StoreReqStatus.ERROR,
                        errorNotification: action?.payload
                    }
                }
            }
        }

        default:
            return {...state}
    }
}
