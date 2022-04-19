import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useEffect} from "react";
import {useAppDispatch} from "../hooks/redux-hooks";
import {getUsersThunk, selectUsersEntities} from "../store/users/users.slice";
import {useSelector} from "react-redux";

const Users = () => {

    const users: Array<any> = useSelector(selectUsersEntities);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUsersThunk())
    }, []);


    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Role</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map((user: any) => (
                            <TableRow
                                key={user?.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {user.email}
                                </TableCell>
                                <TableCell align="right">{user.role}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Users;
