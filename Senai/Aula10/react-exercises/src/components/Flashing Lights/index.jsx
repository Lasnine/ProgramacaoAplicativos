import { useEffect, useState } from "react";
import './index.css'

export default function FlashingLights() {
    const [color, setColor] = useState('#0000ffff');

    useEffect(() => {
        setInterval(() => {
            if (color === '#0000ffff') {
                setColor('#ff0000ff'); }
            else {
                setColor('#0000ffff'); }
        }, 1000)
    })
    
    return (
        <>
            <div className="light" style={{ backgroundColor: color }}></div>
        </>
    )
}