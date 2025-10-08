import { useState, useEffect } from 'react'
import './index.css'

export default function Clock() {
    const [currTime, setCurrTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrTime(new Date())
        }, 1000);

        return () => clearInterval(timer);
    }, [])

    return (
        <>
            <h1 className="clock">{currTime.toLocaleTimeString()}</h1>
        </>
    )
}