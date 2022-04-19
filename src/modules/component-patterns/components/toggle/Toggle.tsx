import {Children, cloneElement, createContext, useState} from "react";


export const Toggle = ({children}: any) => {
    const [on, setOn] = useState(false);

    const toggle = () => setOn(!on);


    return Children.map(children, child => {

        console.log(children, 'children');

        return cloneElement(child, {on, toggle});
    });


}

export default Toggle;
