import { useState } from 'react'

export default function Welcome() {
    const [text, setText] = useState("");

    return (
        <>
            {text.length > 0 &&
            <h4>Welcome, {text}!</h4>
            }
            {text.length == 0 &&
            <h4>Welcome!</h4>}
            
            <input type="text" placeholder="Insert your name..." onChange={(e) => setText(e.target.value)}></input>
        </>
    )
}