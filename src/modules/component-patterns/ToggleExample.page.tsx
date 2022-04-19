import Toggle from "./components/toggle/Toggle";
import ToggleOnMsg from "./components/toggle/ToggleOnMsg";
import ToggleOfMsg from "./components/toggle/ToggleOfMsg";
import ToggleButton from "./components/toggle/ToggleButton";
import {createContext} from "react";
import ToggleContextComponent, {ToggleContext} from "./components/toggle/Toggle-Context";


// export const ToggleExamplePage = () => {
//
//
//     return (
//         <div>
//             <Toggle>
//                 <ToggleOnMsg>The button is on</ToggleOnMsg>
//                 <ToggleOfMsg>The button is off</ToggleOfMsg>
//                 <div>
//                     <ToggleButton/>
//                 </div>
//             </Toggle>
//         </div>
//     )
// }
//
// export default ToggleExamplePage;

export const ToggleExamplePage = () => {


    return (
        <div>
            <ToggleContextComponent>
                <p>hello</p>
                <ToggleOnMsg>The button is on</ToggleOnMsg>
                <ToggleOfMsg>The button is off</ToggleOfMsg>
                <div>
                    <ToggleButton/>
                </div>
            </ToggleContextComponent>
        </div>
    )
}

export default ToggleExamplePage;
