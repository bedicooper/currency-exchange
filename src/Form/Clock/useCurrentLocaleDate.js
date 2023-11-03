import { useState, useEffect, useRef } from "react";

export const useCurrentLocaleDate = () => {
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

    return currentDate;
};
