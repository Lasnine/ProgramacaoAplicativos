import { useEffect, useState } from "react";
import './index.css'

export default function TrafficLights() {
    const colors = ['#ff0000','#00ff00','#ffff00'];
    const [color, setColor] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setColor(lastColor => (lastColor + 1) % colors.length);
        }, 2000)
    })
    
    return (
        <>
            <div className="light" style={{ backgroundColor: colors[color] }}></div>
        </>
    )
}