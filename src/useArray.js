import { useState, useCallback } from "react";

/**
 * Returns a stateful array, and functions to handle the array.
 * @example
 *      const todos = useArray(["foo", "bar"])
 *      todos.add("baz") * @param {array} initial the initial array state
 * @returns {array} the array state
 * @returns {function} { state, add(), 'clear(), removeIndex(), removeById() }
 */
const useArray = (initial) => {
    const [value, setValue] = useState(initial);

    const handleAdd = (item) => {
        setValue((arr) => [...arr, item]);
    };

    const handleClear = () => {
        setValue([]);
    };

    const handleRemoveIndex = (index) => {
        setValue((arr) => {
            arr.splice(index, 1);
            return arr;
        });
    };

    const handleRemoveById = (id) => {
        setValue((arr) => arr.filter((x) => x && x.id !== id));
    };

    return {
        value,
        add: useCallback(handleAdd, []),
        clear: useCallback(handleClear, []),
        removeIndex: useCallback(handleRemoveIndex, []),
        removeById: useCallback(handleRemoveById, []),
    };
};

export { useArray };
