import { useState, useEffect } from "react";

export const Clock = () => {
    let [currentDate, setCurrnetDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setCurrnetDate(currentDate = new Date());
        }, 1000);
    }, []);

    return (
        <p>
            Dzisiaj jest
            {' '}
            {currentDate.toLocaleString(
                undefined, {
                    month: "long", weekday: "long", day: "numeric"
            })
            }
            {', '}
            {currentDate.toLocaleTimeString()
            }
        </p >
    )

};

export default Clock;