import SetCounter from "../components/SetCounter";
import {useCounter} from "../hooks/useCounter";

const BasicCounter = () => {
    const {count, increment, decrement, set} = useCounter();


    return (
        <main className="flex flex-col">
            <p className="count">{count}</p>
            <section className="flex flex-col">
                <button onClick={() => increment()}>Increment</button>
                <button onClick={() => decrement()}>Decrement</button>
                <button onClick={() => set(5)}> Reset</button>
            </section>
            <SetCounter/>
        </main>
    )

};

export default BasicCounter;
