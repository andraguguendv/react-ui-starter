import {useDispatch, useSelector} from "react-redux";
import {selectTransactions, selectTransactionsRequestStatus} from "../store/transactions/transactions.reducer";
import {useEffect} from "react";
import {fetchTransactions} from "../store/transactions/transactions.actions";
import Error from "../../customHooks/components/Error";
import Loader from "../../customHooks/components/Loader";
import {StoreReqStatus} from "../../../models/store/status.model";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

const Transactions = () => {

    const transactions = useSelector(selectTransactions);
    const requestStatus = useSelector(selectTransactionsRequestStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTransactions());
    }, []);

    console.log(transactions, 'eee')

    if (requestStatus?.status === StoreReqStatus.ERROR) return <Error error={requestStatus.errorNotification}/>
    if (requestStatus?.status === StoreReqStatus.PENDING) return <Loader/>

    return (
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
    )
}

export default Transactions;
