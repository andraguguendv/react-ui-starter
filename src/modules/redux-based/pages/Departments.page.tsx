import {useDispatch, useSelector} from "react-redux";
import {selectDepartments, selectDepartmentsRequestStatus} from "../store/departments/departments.reducer";
import {StoreReqStatus} from "../../../models/store/status.model";
import Error from "../../customHooks/components/Error";
import Loader from "../../customHooks/components/Loader";
import {useEffect} from "react";
import {fetchDepartments} from "../store/departments/departments.actions";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Department} from "../models/department";

const Departments = () => {
    const departments = useSelector(selectDepartments);
    const requestStatus = useSelector(selectDepartmentsRequestStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDepartments());
    }, []);

    if (requestStatus?.status === StoreReqStatus.ERROR) return <Error error={requestStatus.errorNotification}/>
    if (requestStatus?.status === StoreReqStatus.PENDING) return <Loader/>


    return (
        <div className="flex w-4/5 mx-auto mt-8">
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
                        {departments.map((department: Department) => (
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
