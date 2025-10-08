import { useEffect, useState } from "react";

export default function EvenOrOdd() {
    const [count , setCount] = useState(0);
    const [isEven, setEven] = useState(true);

    useEffect(() => {
            const interval = setInterval(() => {
                setCount(count => count + 1)
            }, 1000);

            return () => clearInterval(interval);
        }, [])

    useEffect(() => {
        setEven(count % 2 === 0);
    }, [count]);

    return (
        <>
            {isEven &&
            <h1>Count: {count}, o número é par</h1>}
            {!isEven &&
            <h1>Count: {count}, o número é ímpar</h1>}
        </>
    )
}