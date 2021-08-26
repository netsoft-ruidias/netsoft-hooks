# Netsoft's react hooks

Better description coming soon... stay tuned

## Hooks

### useAcrValues

Retrieve ACR Values form text to object

usage:

```JavaScript
    const [acrValues] = useAcrValues("acrValues=key1:value1 key2:value2");
```

### useArray

usage:

```JavaScript
    const todos = useArray(["foo", "bar"])
    todos.add("baz")
```

### useBodyStyle

### useDarkMode

usage:

```JavaScript
    const [darkMode, setDarkMode] = useDarkMode();
```

### useEventListener

// usage:
usage:

```JavaScript
    const handler = () => {... }
    useEventListener("mousemove", handler);
```

### useFavicon

### useFetch (test/beta)

### useFetchApi (test/beta)

### useFullScreen

(adapted from: [stevenpersia/captain-hook](https://github.com/stevenpersia/captain-hook/blob/master/useFullScreen.js))

usage:

```JavaScript
    const [ elementFS, toggleFS, isFS ] = useFullScreen();
    <div ref={elementFS}>I want to fullscreen this div.</div>
    <button onClick={toggleFS}>Trigger fullscreen</button>
    <button onClick={toggleFS}>Exit fullscreen</button>
```

### useHover

usage:

```JavaScript
    const [hoverRef, isHovered] = useHover();
    return <div ref={hoverRef}>{isHovered ? "😁" : "☹️"}</div>;
```

### useLocalStorage

Similar to useState but first arg is key to the value in local storage.

usage:

```JavaScript
    const [name, setName] = useLocalStorage("name", "Bob");
```

### useMediaQuery

source: [usehooks.com](https://usehooks.com/useMedia/)

### usePkce

**Proof Key for Code Exchange**
PKCE, pronounced “pixy” is an acronym for Proof Key for Code Exchange.
The key difference between the PKCE flow and the standard Authorization Code flow is users aren't required to provide a client_secret.

usage:

```JavaScript
    const [verifier, challenge] = usePkce();
```

### useQueryString

### useRouter

### useToggle

Call the hook which returns, current value and the toggler function

usage:

```JavaScript
    const [isLoading, toggleLoading] = useToggle();
```

# ISC Licence

Copyright (c) 2010-2021, Netsoft® (Portugal) mail@netsoft.pt

Permission to use, copy, modify, and distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
