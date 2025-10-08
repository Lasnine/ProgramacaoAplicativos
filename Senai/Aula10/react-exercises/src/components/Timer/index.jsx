import { useEffect, useState } from 'react';
import './index.css'

export default function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setActive] = useState(false);

     useEffect(() => {
        if (!isActive) return;

        const timer = setInterval(() => {
            setSeconds(lastSeconds => {
                if (lastSeconds <= 1) {
                    setActive(false);
                    return 0;
                }
                return(lastSeconds - 1);
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [isActive]);

    const handleChange = (e) => {
        setSeconds(Number(e.target.value));
    };

    const handleSubmit = () => {
        if (seconds > 0) {
            setActive(true);
        }
    };
    
    return (
        <>
            {seconds === 0 && !isActive ? (
            <h1 style={{ color: "thistle" }}>Tempo esgotado!</h1>) : (<h1 style={{ color: "thistle" }}>{seconds}</h1>)}
            
            <h3>Selecione o tempo para a contagem regressiva (segundos)</h3>
            <input type="number" min ="0" className="timeinput" value={seconds} onChange={handleChange} disabled={isActive}></input>
            <button onClick={handleSubmit} disabled={isActive}>Iniciar</button>
        </>
    )
}