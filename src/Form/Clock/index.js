import { useCurrentLocaleDate } from "./useCurrentLocaleDate";

export const Clock = () => {
    const currentDate = useCurrentLocaleDate();

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