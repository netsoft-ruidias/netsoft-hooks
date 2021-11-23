import { useCallback, useEffect, useState } from "react";

const useScript = (src) => {
    const [status, setStatus] = useState(src ? "loading" : "idle");

    useEffect(() => {
        if (!src) {
            setStatus("idle");
            return;
        }

        let script = document.querySelector(`script[src="${src}"]`);

        if (!script) {
            // Create script
            script = document.createElement("script");
            script.src = src;
            script.async = true;
            script.setAttribute("data-status", "loading");
            // Add script to document body
            document.body.appendChild(script);

            // Store status in attribute on script
            // This can be read by other instances of this hook
            const setAttributeFromEvent = (event) => {
                !!script &&
                    script.setAttribute(
                        "data-status",
                        event.type === "load" ? "ready" : "error"
                    );
            };

            script.addEventListener("load", setAttributeFromEvent);
            script.addEventListener("error", setAttributeFromEvent);
        } else {
            // Grab existing script status from attribute and set to state.
            setStatus(script.getAttribute("data-status") || "idle");
        }

        const setStateFromEvent = (event) => {
            setStatus(event.type === "load" ? "ready" : "error");
        };

        // Add event listeners
        script.addEventListener("load", setStateFromEvent);
        script.addEventListener("error", setStateFromEvent);

        return () => {
            if (script) {
                script.removeEventListener("load", setStateFromEvent);
                script.removeEventListener("error", setStateFromEvent);
            }
        };
    }, [src]);

    return status;
};

export { useScript };
