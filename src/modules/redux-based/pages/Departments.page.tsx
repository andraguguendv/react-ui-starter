import {Department} from "../models/department";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks";
import {
    getDepartments,
    getDepartmentsRequestStatus,
    getDepartmentsThunk,
    getMemoizedDepartments
} from "../store/departments/departments.slice";
import {RequestStatus} from "../../../models/store/request-status.model";
import {StoreReqStatus} from "../../../models/store/status.model";
import Error from "../../customHooks/components/Error";
import Loader from "../../customHooks/components/Loader";

const Departments = () => {

    const dispatch = useAppDispatch();
    const departments: Array<Department> = useAppSelector(getMemoizedDepartments);
    const requestStatus: RequestStatus = useAppSelector(getDepartmentsRequestStatus);


    useEffect(() => {
        dispatch(getDepartmentsThunk());
    }, [])

    if (requestStatus?.status === StoreReqStatus.ERROR) return <Error error={requestStatus?.errorNotification}/>
    if (requestStatus?.status === StoreReqStatus.PENDING) return <Loader/>


    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">User</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {departments?.map((department: Department) => (
                            <TableRow
                                key={department.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {department.description}
                                </TableCell>
                                <TableCell align="right">{department.address}</TableCell>
                                <TableCell align="right">{department.user}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Departments;
