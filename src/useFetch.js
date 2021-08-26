import { useState, useEffect } from "react";

const useFetch = (url, options) => {
    const [isLoading, setLoading] = useState(null);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            setLoading(true);

            try {
                const res = await fetch(url, options);
                const json = await res.json();

                if (!signal.aborted) {
                    setResponse(json);
                    setError(null);
                }
            } catch (err) {
                if (!signal.aborted) {
                    setResponse(null);
                    setError(err);
                }
            } finally {
                if (!signal.aborted) {
                    setLoading(false);
                }
            }
        };
        fetchData();

        return () => {
            abortController.abort();
        };
    }, [url, options]);

    return [response, error, isLoading];
};

export { useFetch };
