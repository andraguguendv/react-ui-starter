import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {reducer as counterReducer} from './counter/counter.reducer';
import {reducer as transactionReducer} from './transactions/transactions.reducer';
import thunk from 'redux-thunk';

const middleware: any = [thunk];

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        counter: counterReducer,
        transactionsState:transactionReducer
    }),
    composeEnhancers(applyMiddleware(...middleware))
);
