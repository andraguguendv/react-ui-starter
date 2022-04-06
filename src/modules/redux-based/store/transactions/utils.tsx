import axios from "../../../../api/axios";


export const getTransaction = async () => {
    return await axios.get('v1/transactions');
}
