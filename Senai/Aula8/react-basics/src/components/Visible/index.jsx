import { useState } from 'react'

export default function Visible({ text }) {
    const [isVisible, setVisible] = useState(true);

    return (
        <>
        {isVisible && 
        <p>{text}</p>}
        <button onClick={() => setVisible(!isVisible)}>{isVisible ? 'Hide' : 'Show'}</button>
        </>
    );
}