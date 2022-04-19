import './switch.css';

const noop = () => {

}

export const Switch = (props: any) => {

    const {
        on,
        className = '',
        'aria-label': ariaLabel,
        onClick,
        ...extraProps
    } = props;

    const btnClassName = [
        className,
        'toggle-btn',
        on ? 'toggle-btn-on' : 'toggle-btn-off',
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <label aria-label={ariaLabel || 'Toggle'} style={{display: 'block'}}>
            <input
                className="toggle-input"
                type="checkbox"
                checked={on}
                onChange={noop}
                onClick={onClick}
                data-testid="toggle-input"
            />
            <span className={btnClassName} {...extraProps} />
        </label>
    )
}

export default Switch;
