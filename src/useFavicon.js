import { useEffect } from "react";

/**
 * Allows you to change the favicon from within a component.
 * @example
 *      const [path, type] = useFavicon("/path/to/image");
 */
const useFavicon = (path, type = "image/x-icon") => {
    useEffect(() => {
        const link =
            document.querySelector("link[rel*='icon']") ||
            document.createElement("link");
        link.rel = "shortcut icon";
        link.type = type;
        link.href = path;
        document.querySelector("head").appendChild(link);
    }, [path, type]);
};

export { useFavicon };
