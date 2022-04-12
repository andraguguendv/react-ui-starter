import {configureStore} from "@reduxjs/toolkit";
import departmentsReducer from './departments/departments.slice';
import usersReducer from './users/users.slice';

export const store = configureStore({
    reducer: {
        departments: departmentsReducer,
        usersState: usersReducer
    }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
