import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectTransactionsRequestStatus, selectTransactions} from "../store/transactions/transactions.reducer";
import {useEffect} from "react";
import {fetchTransactions} from "../store/transactions/transactions.actions";
import {StoreReqStatus} from "../../../models/store/status.model";
import Error from "../../customHooks/components/Error";
import Loader from "../../customHooks/components/Loader";

const Transactions = () => {
    const transactions = useSelector(selectTransactions);
    const requestStatus = useSelector(selectTransactionsRequestStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTransactions());
    }, [])


    if (requestStatus?.status === StoreReqStatus.ERROR) return <Error error={requestStatus?.errorNotification}/>
    if (requestStatus?.status === StoreReqStatus.PENDING) return <Loader/>

    return (
        <div>
            <div className="flex w-4/5 mx-auto mt-8">
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Title</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                <TableCell align="right">User</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions.map((transaction: any) => (
                                <TableRow
                                    key={transaction.title}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        {transaction.description}
                                    </TableCell>
                                    <TableCell align="right">{transaction.amount}</TableCell>
                                    <TableCell align="right">{transaction.user}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default Transactions;
