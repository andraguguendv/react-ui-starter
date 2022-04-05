import React, {useState} from 'react';
import './App.css';
import AuthContext from './context/authContext/auth.context';
import AuthenticatedApp from "./modules/AuthenticatedApp";
import UnauthenticatedApp from "./modules/UnauthenticatedApp";
import axios from './api/axios';
import {LoginResponse} from "./models/http-responses/login-response.model";
import {LoginState} from "./pages/login/models/login-state.model";
import {LoginCredentials} from "./pages/login/models/login-credentials.model";
import {AuthContextState} from "./context/authContext/models/auth.context.model";

const LOGIN_URL = 'v1/auth/login';

const App = () => {
    const token = localStorage.getItem('token');
    const userInfo = localStorage.getItem('userInfo');
    const expiresAt = localStorage.getItem('expiresAt');

    const [loginState, setLoginState] = useState<LoginState>({
        isLoading: false,
        isError: false,
        isSuccess: false,
        token: token ? token : null,
        userInfo: userInfo ? JSON.parse(userInfo) : {}
    });

    const submitCredentials = async (credentials: LoginCredentials) => {
        const {email, password} = credentials;

        try {
            const response = await axios.post(LOGIN_URL,
                {email, password},
            );
            const {token, user: userInfo}: LoginResponse = response?.data;
            setLoginState({
                isLoading: false,
                isError: false,
                isSuccess: true,
                userInfo,
                token,
            })

            localStorage.setItem('token', token);
            localStorage.setItem('userInfo', JSON.stringify(userInfo));

        } catch (err: any) {
            if (!err?.response) {
                console.log('err');
            } else if (err.response?.status === 400) {
                console.log('err');
            } else if (err.response?.status === 401) {
                console.log('err');
            } else {
                console.log('err');
            }
        }
    };

    const proxy: { auth: AuthContextState, setAuth?: any } = {
        auth: {
            token: loginState.token,
            userInfo: loginState.userInfo
        }
    };
    return (
        <div className="App dark:bg-gray-800">
            <div className="App">
                <AuthContext.Provider value={proxy}>
                    {loginState.userInfo ? (<AuthenticatedApp/>) : (
                        <UnauthenticatedApp submitCredentials={submitCredentials}/>)}
                </AuthContext.Provider>

            </div>
        </div>
    );
}

export default App;
