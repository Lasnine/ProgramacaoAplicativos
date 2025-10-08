import { useEffect, useState } from "react"

export default function ProgressBar() {
    const [progress, setProgress] = useState("");
    const [num, setNum] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(progress => {
                if (progress.length >= 10) {
                    return "";
                }
                return progress + "█";
            });
            setNum(num => {
                if (num >= 100) {
                        return 0;
                    }
                    return num + 10;
            })
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <h1>Progresso:</h1>
            <h1>{progress} {num}%</h1>
        </>
    )
}