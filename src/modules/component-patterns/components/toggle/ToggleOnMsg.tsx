import {Props} from "./ToggleOfMsg";
import {useToggleContext} from "../../hooks/useToggleContext";

// export const ToggleOnMsg = (props: Props) => {
//     const {on, children} = props;
//
//     return on ? children : null
// }
//
// export default ToggleOnMsg;


export const ToggleOnMsg = ({children}: any) => {
    const {on} = useToggleContext();

    return on ? children : null
}

export default ToggleOnMsg;
