import {useToggleContext} from "../../hooks/useToggleContext";

export type Props = {
    on?: boolean,
    children?: any,
    toggle?: any

}

// export const ToggleOfMsg = (props: Props) => {
//     const {on, children} = props;
//
//     return on ? null : children
//
// }
//
// export default ToggleOfMsg;

export const ToggleOfMsg = ({children}: any) => {
    const {on} = useToggleContext();

    return on ? null : children

}

export default ToggleOfMsg;
