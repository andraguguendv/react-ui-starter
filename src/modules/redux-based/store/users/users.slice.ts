import {createAsyncThunk, createEntityAdapter, createSlice, EntityState} from "@reduxjs/toolkit";
import {initialRequestStatus, RequestStatus} from "../../../../models/store/request-status.model";
import {v4 as uuidv4} from 'uuid';
import {UsersActions} from "./users.actions";
import axios from "../../../../api/axios";
import {StoreReqStatus} from "../../../../models/store/status.model";
import {RootState} from "../store-toolkit";

export interface UsersState extends EntityState<any> {
    requestStatus: RequestStatus
}

const usersAdapter = createEntityAdapter<any>({
    selectId: () => uuidv4()
});

export const getUsersThunk = createAsyncThunk(UsersActions.GET_USERS, async () => {
    const {data: users} = await axios.get('v1/users');

    return {users};
});

export const initialState: UsersState = usersAdapter.getInitialState({
    requestStatus: initialRequestStatus
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUsersThunk.pending, (state) => {
            state.requestStatus.status = StoreReqStatus.PENDING;
        });
        builder.addCase(getUsersThunk.fulfilled, (state, action) => {
            const users = action.payload.users.data;
            state.requestStatus = {
                status: StoreReqStatus.COMPLETED,
                errorNotification: null
            };

            usersAdapter.setAll(state, users);
        });
        builder.addCase(getUsersThunk.rejected, (state, action) => {
            state.requestStatus.status = StoreReqStatus.ERROR;
            state.requestStatus.errorNotification = action.error.message;
        })
    }
});

export const usersSelectors = usersAdapter.getSelectors<RootState>(
    (state) => state.usersState);


export const selectUsersEntities = (state: RootState) => Object.values(state.usersState.entities);
const a = {'1': {id: '1', name: 'user 1'}, '2': {id: '2', name: 'user 2'}};

export default usersSlice.reducer;







