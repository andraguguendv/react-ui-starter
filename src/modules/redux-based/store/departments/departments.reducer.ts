import {DepartmentsActions} from "./departments.actions";
import {DomainStatus} from "../../../../models/store/domain-status.model";
import {initialRequestStatus} from "../../../../models/store/request-status.model";
import {StoreReqStatus} from "../../../../models/store/status.model";
import {Department} from "../../models/department";

export interface DepartmentsState {
    departments: DomainStatus<Array<Department>>;
}

export const initialState = {
    departments: {
        domain: [],
        requestStatus: initialRequestStatus
    }
};


// selectors
export const selectDepartments = (state: any) => {
    console.log(state, 'stateeee');

    return state.departmentsState?.departments?.domain
};

export const selectDepartmentsRequestStatus = (state: any) => {
    console.log(state, 'stateeee');

    return state.departmentsState?.departments?.requestStatus
};


export const reducer = (state: DepartmentsState = initialState, action: any) => {
    switch (action.type) {
        case DepartmentsActions.GET_DEPARTMENTS: {
            return {
                ...state,
                departments: {
                    ...state.departments,
                    requestStatus: {
                        status: StoreReqStatus.PENDING,
                        errorNotification: null
                    }
                }
            }
        }
        case DepartmentsActions.GET_DEPARTMENTS_SUCCESS: {
            return {
                ...state,
                departments: {
                    domain: action.payload,
                    requestStatus: {
                        status: StoreReqStatus.COMPLETED,
                        errorNotification: null
                    }
                }
            }
        }

        case DepartmentsActions.GET_DEPARTMENTS_ERROR: {
            return {
                ...state,
                departments: {
                    ...state.departments,
                    requestStatus: {
                        status: StoreReqStatus.ERROR,
                        errorNotification: action.payload
                    }
                }
            }
        }
        default:
            return {...state};
    }
};
