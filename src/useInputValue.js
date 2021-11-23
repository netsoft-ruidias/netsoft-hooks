import { useState } from "react";

// Credits:
// https://www.tuckerblackwell.com/two-simple-reusable-hooks-for-your-react-apps/

/**
 * Returns an object containing the value and an onChange function to update that value.
 * @example
 *      const Email = useInputValue("");
 *      toggleLoading()
 * @returns {object} the value
 * @returns {function} the onChange function
 */
export const useInputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        onChange: (arg) => {
            setValue(arg.target.value || arg.target.innerText);
        },
    };
};

/*
 * const email = useInputValue("");
 * const password = useInputValue("");
 * const handleSubmit = e => {
 *   e.preventDefault();
 *   loginUser(email.value, password.value);
 * };
 * ...
 * <input type="text" placeholder="Email" {...email} />
 * <input type="password" placeholder="Password" {...password} />
 * ...
 */

/*
    The syntax can initially be off-putting, but if you’re familiar with
    object spreading this is actually quite cool. If you recall, we’re 
    returning an object from our custom Hook, so email looks like this 
    { value, onChange: () => ...}. 
    This means that by spreading over both the email and password variables 
    on our inputs, we’re exposing the onChange handler to the input and 
    thus this is all we need to update the inputs’ values. You can imagine 
    that this hook could be quite powerful if you wanted to add further 
    validation logic and other event listeners. Keep in mind that if we were
    to name our updater function anything other than onChange or any other 
    event listener in React, the spread syntax wouldn’t work.

    A personal recommendation though when it comes to using a hook like this 
    is to do so for smaller forms, ideally where there’s only a couple of 
    input field (i.e. a login form). If nothing else just to avoid the 
    clutter of having 7 different invocations of the hook at once, given 
    there were 7 form fields. I prefer to work with objects in these cases, 
    but of course that’s a matter of preference.
*/
