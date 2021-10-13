import { useEffect } from "react";

/**
 * Add a custom style to the html's page body
 * @example
 *      const [styel] = useBodyStyle({backgroundColor: red});
 */
const useBodyStyle = (style) => {
    useEffect(() => {
        for (var key in style) {
            window.document.body.style[key] = style[key];
        }
        return () => {
            window.document.body.style[key] = "";
        };
    }, [style]);
};

export { useBodyStyle };
