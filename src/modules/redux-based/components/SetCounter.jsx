import {useEffect, useState} from "react";
import {useCounter} from "../hooks/useCounter";

const SetCounter = () => {
    const [count, setCount] = useState(0);
    const {count: counter, set} = useCounter();

    useEffect(() => {
        setCount(counter);
    }, [counter]);


    return (
        <section className="controls">
            <form onSubmit={(event) => {
                event.preventDefault();
                set(count)
            }}>


                <label>
                    Set Count
                </label>
                <input type="number" value={count} onChange={(event) => setCount(parseInt(event.target.value, 10))}/>
                <input type="submit"/>
            </form>

        </section>
    )
}

export default SetCounter;
