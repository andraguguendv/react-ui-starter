import {Accordion} from "./components/accordion/Accordion";


const items = [
    {
        title: 'First panel',
        contents: (
            <div>
                First panel content.
            </div>
        ),
    },
    {
        title: 'Second panel',
        contents: (
            <div>
                Second panel content.
            </div>
        ),
    },
    {
        title: 'Third panel',
        contents: (
            <div>
                Third panel content.
            </div>
        ),
    },
]

export const AccordionExamplePage = () => {


    return (
        <div>
            <Accordion items={items}></Accordion>
        </div>
    )


}

export default AccordionExamplePage;
