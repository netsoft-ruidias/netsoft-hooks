import { useEffect, useState } from "react";

const useAcrValues = (str) => {
    const [acrValues, setAcrValues] = useState({});

    useEffect(() => {
        var result = str
            .split(" ")
            .map((x) => {
                let y = x.split(":");
                return { [y[0]]: y[1] };
            })
            .reduce((result, item) => Object.assign(result, item));

        setAcrValues(result);
    }, [str]);

    return [acrValues];
};

export { useAcrValues };
