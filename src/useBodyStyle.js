import { useEffect } from "react";

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
