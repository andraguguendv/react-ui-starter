import {createContext, ReactNode, useState} from "react";
import {AuthContextState} from "./models/auth.context.model";

const AuthContext = createContext<{ auth: AuthContextState, setAuth?: any }>({
    auth: {
        userInfo: null,
        token: null
    }
});

export const AuthProvider = ({children}: { children: ReactNode }) => {
    const [auth, setAuth] = useState({
        userInfo: null,
        token: null
    });

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
