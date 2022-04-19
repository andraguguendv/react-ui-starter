export const AccordionContents = ({isOpen, children, ...props}: any) => {


    return (
        <div>
            {isOpen ? children : ''}
        </div>
    )


}


export default AccordionContents;
