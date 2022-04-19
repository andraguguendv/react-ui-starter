import {useContext} from "react";
import {ToggleContext} from "../components/toggle/Toggle-Context";

export const useToggleContext = (): Record<string, any> => {
    return useContext(ToggleContext);
}
