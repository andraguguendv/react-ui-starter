import {Props} from "./ToggleOfMsg";
import Switch from "./Switch";
import {useToggle} from "../../../customHooks/hooks/useToggle";
import {useToggleContext} from "../../hooks/useToggleContext";

// export const ToggleButton = (props: Props) => {
//     const {on, toggle, ...otherProps} = props;
//
//     return <Switch on={on} onClick={toggle} {...otherProps} />
//
// }
//
// export default ToggleButton;

export const ToggleButton = ({...props}) => {
    const {on, toggle} = useToggleContext();

    return <Switch on={on} onClick={toggle} {...props} />

}

export default ToggleButton;
