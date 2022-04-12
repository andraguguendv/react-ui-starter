import {createAsyncThunk, createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DomainStatus} from "../../../../models/store/domain-status.model";
import {Department} from "../../models/department";
import {initialRequestStatus} from "../../../../models/store/request-status.model";
import {DepartmentsActions} from "./departments.actions";
import axios from "../../../../api/axios";
import {StoreReqStatus} from "../../../../models/store/status.model";
import {RootState} from "../store-toolkit";


const initialState: DomainStatus<Array<Department>> = {
    domain: [],
    requestStatus: initialRequestStatus
}


export const getDepartmentsThunk = createAsyncThunk(DepartmentsActions.GET_DEPARTMENTS, async () => {
    const {data: {data: departments}} = await axios.get('v1/departments');


    return {departments};

})
const departmentsSlice = createSlice({
    name: "departments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDepartmentsThunk.pending, (state) => {
            state.requestStatus.status = StoreReqStatus.PENDING;
        });
        builder.addCase(getDepartmentsThunk.fulfilled, (state, action: PayloadAction<{ departments: Array<Department> }>) => {
            const {departments} = action.payload;
            state.domain = departments;
            state.requestStatus.status = StoreReqStatus.COMPLETED;
        });
        builder.addCase(getDepartmentsThunk.rejected, (state, action) => {
            state.requestStatus.status = StoreReqStatus.ERROR;
            state.requestStatus.errorNotification = action.error.message;
        })

    }
});

export function getDepartments(state: RootState) {
    console.log('get departments selector');

    return state.departments.domain
}

export const getMemoizedDepartments = createSelector(
    (state: RootState) => state.departments.domain,
    (departments) => {
        console.log('departments memoized version');

        return departments;
    }
);

export function getDepartmentsRequestStatus(state: RootState) {
    return state.departments.requestStatus;
}


export default departmentsSlice.reducer;
