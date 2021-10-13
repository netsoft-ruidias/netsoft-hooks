import { useEffect, useState } from "react";

/**
 * Get a key/value pair of acrValues from a queryString (see OpenIDConnect)
 * @param {string} str the acrValues string
 * @returns {array} key/value pair of acr Values
 */
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
