import { useEffect, useState } from 'react';

export default function MyComponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    };

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        // setInterval(() => {
        //     setDate(new Date());
        // }, 1000);

        // clean up - stop the timer
        return () => {
            clearInterval(interval);
        };
    }, []);

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    );
}
