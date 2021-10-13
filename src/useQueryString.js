import { useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";
import queryString from "query-string";

/**
 * Convert the queryString into a key/value object that you can use in your component.
 * @example
 *      const [params, location] = useQueryString();

 */
const useQueryString = () => {
    const params = useParams();
    const location = useLocation();

    // Memoize so that a new object is only returned if something changes
    return useMemo(() => {
        // Merge params and parsed query string into single "query" object
        // so that they can be used interchangeably.
        // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
        return {
            ...queryString.parse(location.search), // Convert string to object
            ...params,
        };
    }, [params, location]);
};

export { useQueryString };
