import {compose, createStore, combineReducers, applyMiddleware} from 'redux';
import {reducer as transactionsReducer} from './transactions/transactions.reducer';
import {reducer as departmentsReducer} from './departments/departments.reducer';
import thunk from 'redux-thunk';


const middleware = [thunk];

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    combineReducers({
        transactionsState: transactionsReducer,
        departmentsState: departmentsReducer
    }),
    composeEnhancers(applyMiddleware(...middleware))
);
