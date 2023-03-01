import { useEffect, useState } from "react";

function useDebounse<T> (value: T, timeout = 200)  {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), timeout);

        return () => {
            clearTimeout(timer);
        }
    }, [value, timeout]);

    return debouncedValue;
};  

export default useDebounse;