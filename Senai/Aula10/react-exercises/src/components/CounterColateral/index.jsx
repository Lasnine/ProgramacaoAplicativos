import { useState } from "react";
import './index.css'

export default function CounterColateral() {
    const [count , setCount] = useState(0);

    const increase = () => {
        setCount(count => count + 1)
    }

    const decrease = () => {
        setCount(count => count - 1)
    }

    return (
        <>
        <div className="buttons">
            <button onClick={increase} style={{ width: '80px', height: '80px'}}>+</button>
            <h1>O contador agora está em {count}</h1>
            <button onClick={decrease} style={{ width: '80px', height: '80px'}}>-</button>
        </div>
        </>
    )
}