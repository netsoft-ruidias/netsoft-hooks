import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Execute a debounced 'action' with a defined delay on state changes
 * @param {any} originalState the original state
 * @param {function} action function to run debounced
 * @param {number} delay time in ms
 * @returns {function} closure function
 */
const useDebounce = (originalState, action, delay = 1000) => {
    const [state, setState] = useState(originalState);

    const timoutRef = useRef();
    const callback = useCallback(
        (args) => {
            if (timoutRef.current) clearTimeout(timoutRef.current);
            timoutRef.current = setTimeout(
                () => action.apply("", [args]),
                delay
            );
        },
        [action, delay]
    );

    useEffect(() => {
        state && callback(state);
    }, [callback, state]);

    return [state, setState];
};

export { useDebounce };
