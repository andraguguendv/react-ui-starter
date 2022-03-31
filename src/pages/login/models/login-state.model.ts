import {UserInfo} from "../../../models/http-responses/userInfo.model";

export interface LoginState {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    token: string | null;
    userInfo: UserInfo | null;
}
