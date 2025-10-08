import { useEffect, useState } from 'react'

export default function AlterTitle() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    useEffect(() => {
        setInterval(() => {setCount(count => count + 1)}, 1000);
    }, [])

    return(
        <>
        <h4>Count: {count}</h4>
        </>
    );
}