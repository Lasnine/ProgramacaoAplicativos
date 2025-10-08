import { useState, useEffect } from "react";

export default function FastClick() {
    const [clicks, setClicks] = useState(0);
    const [isClickable, setClickable] = useState(true);

    useEffect(() => {
        if (!isClickable) return;

        const timer = setTimeout(() => {
            setClickable(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [isClickable]);

    const restart = () => {
        setClicks(0);
        setClickable(true);
    }

    return (
        <>
            {!isClickable &&
            <h1>Você pontuou {clicks} pontos!</h1>}
            {isClickable &&
            <h1>Jogo do Clique Rápido</h1>}

            <button onClick={() => setClicks(clicks => clicks + 1)} disabled={!isClickable}>Clique aqui!</button>
            <br/>
            <button onClick={restart}>Reiniciar</button>
        </>
    )
}