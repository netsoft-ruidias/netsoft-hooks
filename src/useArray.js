import { useState, useCallback } from "react";

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

// usage:
// const todos = useArray(["foo", "bar"])
// todos.add("baz")

export { useArray };
