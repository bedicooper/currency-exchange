import { useState, useEffect, useRef } from "react";

export const Clock = () => {
    let [currentDate, setCurrnetDate] = useState(new Date());
    const intervalId = useRef(null);

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setCurrnetDate(currentDate = new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId.current);
        };
    }, []);

    const currentLocaleDay = currentDate.toLocaleString(
        undefined, { month: "long", weekday: "long", day: "numeric" }
    );
    const currentLocaleTime = currentDate.toLocaleTimeString();

    return (
        <p>
            {`Dzisiaj jest ${currentLocaleDay}, ${currentLocaleTime}`}
        </p >
    )
};

export default Clock;