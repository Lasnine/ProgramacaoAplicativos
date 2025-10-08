import './index.css'
import { useState } from 'react'

export default function Square() {
    const [color, setColor] =useState('#e5bfff');

    return (
        <>
        <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)}></input>
        </div>
            <div className="square" style={{ backgroundColor: color }}></div>
        </>
    );
}