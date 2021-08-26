import { useState, useRef, useEffect } from "react";

// adapted from: https://github.com/stevenpersia/captain-hook/blob/master/useFullScreen.js

const useFullScreen = () => {
    const [isFullScreen, setFullScreen] = useState(false);
    const element = useRef();

    const enterFS = () => {
        const el = element.current;

        if (el) {
            el.requestFullscreen && el.requestFullscreen();
            el.mozRequestFullScreen && el.mozRequestFullScreen();
            el.webkitRequestFullscreen && el.webkitRequestFullscreen();
            el.msRequestFullscreen && el.msRequestFullscreen();
        }
    };

    const exitFS = () => {
        const elFS = element.current.ownerDocument.fullscreen;

        if (isFullScreen && elFS) {
            document.exitFullscreen();
            document.exitFullscreen && document.exitFullscreen();
            document.mozCancelFullScreen && document.mozCancelFullScreen();
            document.webkitExitFullscreen && document.webkitExitFullscreen();
            document.msExitFullscreen && document.msExitFullscreen();
        }
    };

    const toggle = () => {
        if (isFullScreen) {
            exitFS();
        } else {
            enterFS();
        }
    };

    useEffect(() => {
        const eventHandler = () => {
            setFullScreen((val) => !val);
        };
        document.addEventListener("fullscreenchange", eventHandler);
        return () => {
            document.removeEventListener("fullscreenchange", eventHandler);
        };
    }, [setFullScreen]);

    return [element, toggle, isFullScreen];
};

// usage:
// const [ elementFS, toggleFS, isFS ] = useFullScreen();
// <div ref={elementFS}>I want to fullscreen this div.</div>
// <button onClick={toggleFS}>Trigger fullscreen</button>
// <button onClick={toggleFS}>Exit fullscreen</button>

export { useFullScreen };
