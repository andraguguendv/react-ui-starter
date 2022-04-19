import {Children, cloneElement, createContext, useState} from "react";

export const ToggleContext = createContext({});

export const ToggleContextComponent = ({children}: any) => {
    const [on, setOn] = useState(false);

    const toggle = () => setOn(!on);


    return (
        <ToggleContext.Provider value={{on, toggle}}>
            {children}
        </ToggleContext.Provider>
    )


}

export default ToggleContextComponent;
