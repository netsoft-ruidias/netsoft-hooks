# Netsoft's react hooks

![minzipped size](https://img.shields.io/bundlephobia/minzip/@netsoft/hooks?style=for-the-badge)
![downloads](https://img.shields.io/npm/dt/@netsoft/hooks?style=for-the-badge)
![license](https://img.shields.io/npm/l/@netsoft/hooks?style=for-the-badge)

![open issues](https://img.shields.io/github/issues-raw/netsoft-ruidias/netsoft-hooks?style=for-the-badge)
![pull requests](https://img.shields.io/github/issues-pr/netsoft-ruidias/netsoft-hooks?style=for-the-badge)
![contributors](https://img.shields.io/github/contributors/netsoft-ruidias/netsoft-hooks?style=for-the-badge)
![last commit](https://img.shields.io/github/last-commit/netsoft-ruidias/netsoft-hooks?style=for-the-badge)

![stable version](https://img.shields.io/npm/v/@netsoft/hooks?label=Stable%20Version&style=for-the-badge)
![react dependency version](https://img.shields.io/npm/dependency-version/@netsoft/hooks/react?style=for-the-badge)
![base64url dependency version](https://img.shields.io/npm/dependency-version/@netsoft/hooks/base64url?style=for-the-badge)
![query-string dependency version](https://img.shields.io/npm/dependency-version/@netsoft/hooks/query-string?style=for-the-badge)

## Hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

This repo contains a collection of useful hooks that can be used to speed up front-end application development.

### useAcrValues

Parse a text string with ACR values into an object.

usage:

```JavaScript
    const [acrValues] = useAcrValues("acrValues=key1:value1 key2:value2");
    // acrValues = { key1: value1, key2: value2 }
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
