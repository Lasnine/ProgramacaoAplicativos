import { useEffect, useState } from "react"

export default function Inactivity() {
    const [text, setText] = useState("");
    const [isTyping, setTyping] = useState(false);
    const [lastTyped, setLastTyped] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            if (isTyping && Date.now() - lastTyped > 2000) {
                setTyping(false);
            }
        }, 500); // check every half second

        return () => clearInterval(interval); // clean up
    }, [isTyping, lastTyped]);

    const handleChange = (e) => {
        setText(e.target.value);
        setTyping(true);
        setLastTyped(Date.now());
    }

    return (
        <>
        {!isTyping && <h1>Você parou de digitar...</h1>}
        {isTyping && <h1>{text}</h1>}

        <input id="input" type="text" placeholder="Digite algo..." onChange={handleChange}></input>
        </>
    )
}