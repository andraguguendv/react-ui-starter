import axios from "../../../../../api/axios";

export const getTransactions = async () => {
    return await axios.get('v1/transactions');
}
