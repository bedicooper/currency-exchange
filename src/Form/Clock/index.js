import { useCurrentLocaleDate } from "./useCurrentLocaleDate";

export const Clock = () => {
   const { currentLocaleDay, currentLocaleTime } = useCurrentLocaleDate();

    return (
        <p>
            {`Dzisiaj jest ${currentLocaleDay}, ${currentLocaleTime}`}
        </p >
    )
};

export default Clock;