export enum AccordionDirection {
    HORIZONTAL = 'horizontal',
    VERTICAL = 'vertical'
}

export const AccordionItem = ({direction, children}: any) => {
    const classes = `flex flex-${direction === AccordionDirection.HORIZONTAL ? 'row' : 'col'}`;

    return (
        <div className={classes}>
            {children}
        </div>
    )

}


export default AccordionItem;
