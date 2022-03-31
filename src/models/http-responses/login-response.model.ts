import {UserInfo} from "./userInfo.model";

export interface LoginResponse {
    token: string;
    user: UserInfo;
};
