import { useEffect, useState } from "react"

export default function Stopwatch() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setSeconds(lastSeconds => {
                if (lastSeconds === 59) {
                    setMinutes(lastMinutes => lastMinutes + 1);
                }

                return (lastSeconds + 1) % 60;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning])

    const start = () => {
        setRunning(true);
    }

    const stop = () => {
        setRunning(false);
    }

    const restart = () => {
        setMinutes(0);
        setSeconds(0);
        setRunning(false);
    }

    return (
        <>
        <button onClick={start}>Iniciar</button>
        <button onClick={stop}>Pausar</button>
        <button onClick={restart}>Zerar</button>
        <h1>{minutes}:{seconds}</h1>
        </>
    )
}