import { useCallback, useState } from "react";

const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);

    // Define and memorize toggler function in case we pass down the component,
    // This function change the boolean value to it's opposite value
    const toggle = useCallback(() => setState((state) => !state), []);

    return [state, toggle];
};

// usage:
// Call the hook which returns, current value and the toggler function
// const [isLoading, toggleLoading] = useToggle();

export { useToggle };
