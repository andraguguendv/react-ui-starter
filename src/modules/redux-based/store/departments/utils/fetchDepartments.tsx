import axios from "../../../../../api/axios";

export const getDepartments = async () => {
    return await axios.get('v1/departments');
}
