import {useReducer} from "react";

export const actionTypes = {toggle_index: 'toggle_index'};

export const setIndex = (index: any) => ({
    type: actionTypes.toggle_index,
    index
});

export function accordionReducer(openIndexes: any, action: any) {
    switch (action.type) {
        case actionTypes.toggle_index: {
            const closing = openIndexes.includes(action.index);

            return closing ? openIndexes.filter((i: any) => i !== action.index)
                : [...openIndexes, action.index]

        }


        default: {
            throw new Error(`No action matching in the reducer: ${action.type}`)
        }
    }
}


export const useAccordion = ({reducer}: any) => {
    const [openIndexes, dispatch] = useReducer(reducer, [0]);

    const toggleIndex = (index: any) => {
        // @ts-ignore
        dispatch({
            type: actionTypes.toggle_index,
            index
        });
    }

    return {openIndexes, toggleIndex}
}
