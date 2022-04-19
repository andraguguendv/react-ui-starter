export const AccordionButton = ({isOpen, toggle, children}: any) => {
    const classes = `hover:cursor-pointer flex py-4 ${isOpen ? 'bg-sky-700' : ''}`

    return (
        <div className={classes} onClick={toggle}>
            {children}
        </div>
    )
}


export default AccordionButton;
