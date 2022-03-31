import {UserInfo} from "../../../models/http-responses/userInfo.model";

export interface AuthContextState {
    token: string | null;
    userInfo: UserInfo | null;
}
