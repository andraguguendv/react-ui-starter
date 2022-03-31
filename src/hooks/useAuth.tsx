import {useContext, useDebugValue} from "react";
import AuthContext from "../context/authContext/auth.context";

const useAuth = () => {
    const {auth} = useContext(AuthContext);
    useDebugValue(auth, auth => auth?.userInfo ? "Logged In" : "Logged Out")
    return useContext(AuthContext);
}

export default useAuth;


