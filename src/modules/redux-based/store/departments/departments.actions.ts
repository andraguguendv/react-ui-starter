// actions creators
import {getDepartments} from "./utils/fetchDepartments";
import {Department} from "../../models/department";

export function fetchDepartments() {
    return (dispatch: any) => {
        dispatch({
            type: DepartmentsActions.GET_DEPARTMENTS
        });

        getDepartments().then(({data: {data: departments}}) => {
            console.log(departments, 'dataaa');
            dispatch({
                type: DepartmentsActions.GET_DEPARTMENTS_SUCCESS,
                payload: departments
            })
        }).catch(err => {
            dispatch({
                type: DepartmentsActions.GET_DEPARTMENTS_ERROR,
                payload: err
            })
        })
    }
};
export const getDepartmentsSuccess = (departments: Array<Department>) => ({
    type: DepartmentsActions.GET_DEPARTMENTS_SUCCESS, payload: departments
});
export const getDepartmentsError = (err: any) => ({type: DepartmentsActions.GET_DEPARTMENTS_ERROR, payload: err});


export enum DepartmentsActions {
    GET_DEPARTMENTS = '[Departments] Get departments',
    GET_DEPARTMENTS_SUCCESS = '[Departments] Get departments success',
    GET_DEPARTMENTS_ERROR = '[Departments] Get departments error',
}
