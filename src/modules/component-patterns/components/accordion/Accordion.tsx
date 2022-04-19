import AccordionItem from "./AccordionItem";
import AccordionButton from "./AccordionButton";
import AccordionContents from "./AccordionContents";
import {accordionReducer, actionTypes, useAccordion} from "../../hooks/useAccordion";


function singleReducer(openIndexes: any, action: any) {
    if (action.type === actionTypes.toggle_index) {
        const closing = openIndexes.includes(action.index);

        if (!closing) {
            return [action.index]
        }
    }
}


function combineReducers(...reducers: any) {
    return (state: any, action: any) => {
        for (const reducer of reducers) {
            const result = reducer(state, action)
            if (result) return result;
        }
    }
}

// reducer 1 (state) - (state1) => reducer2(state 1) - (state 2) => reducer 3(state 2) - state(3)

export const Accordion = ({
                              items, reducer = () => {

    }, ...props
                          }: any) => {
    const {openIndexes, toggleIndex}: { openIndexes: any, toggleIndex: any } = useAccordion({
        reducer: combineReducers(
            reducer, singleReducer, accordionReducer
        )
    });


    const toggle = (index: any) => {
        toggleIndex(index);
    }


    return (
        <div>
            {items?.map((item: any, index: any) => (
                <AccordionItem key={index} direction="vertical">

                    <AccordionButton toggle={() => toggle(index)} isOpen={openIndexes?.includes(index)}>
                        {item.title}{' '}
                        <span>{openIndexes?.includes(index) ? '👇' : '👈'}</span>
                    </AccordionButton>
                    <AccordionContents isOpen={openIndexes?.includes(index)}>
                        {item.contents}
                    </AccordionContents>
                </AccordionItem>
            ))}
        </div>
    )


};

export default Accordion;


