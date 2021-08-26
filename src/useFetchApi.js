import { useState } from "react";

const optionsTemplate = {
    redirect: "follow",
    headers: {
        "Accept-Encoding": "gzip, deflate, br",
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        "User-Agent": "Netsoft.UI",
    },
};

const useFetchApi = (url, options) => {
    const [isBusy, setBusy] = useState(null);

    const get = async (uri) => {
        setBusy(true);

        var response = {};
        var error = {};

        try {
            const res = await fetch(`${url}/${uri}`, {
                ...optionsTemplate,
                ...options,
                method: "GET",
            });
            response = await res.json();
        } catch (err) {
            error = err;
        } finally {
            setBusy(false);
        }

        return { response, error };
    };

    // const post = async (uri, body) => {
    //     setBusy(true);

    //     try {
    //         const res = await fetch(
    //             `${url}/${uri}`,
    //             {
    //                 ...optionsTemplate,
    //                 ...options,
    //                 method: "POST",
    //             },
    //             body
    //         );
    //         const json = await res.json();

    //         setResponse(json);
    //     } catch (err) {
    //         setError(err);
    //     } finally {
    //         setBusy(false);
    //     }

    //     return { response, error };
    // };

    const put = async (uri, body) => {
        const fetchData = async () => {
            setBusy(true);

            var response = {};
            var error = {};

            try {
                const res = await fetch(
                    `${url}/${uri}`,
                    {
                        ...optionsTemplate,
                        ...options,
                        method: "GET",
                    },
                    body
                );
                response = await res.json();
            } catch (err) {
                error = err;
            } finally {
                setBusy(false);
            }

            return { response, error };
        };
        return fetchData();
    };

    return { isBusy, get, put };
};

export { useFetchApi };
