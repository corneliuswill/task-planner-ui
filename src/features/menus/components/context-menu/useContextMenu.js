import { useState, useEffect, useCallback } from 'react';

export const useContextMenu = () => {
    let [xPos, setXpos] = useState("0px");
    let [yPos, setYpos] = useState("0px");
    let [isVisible, setIsVisible] = useState(false);

    const handleContextMenu = useCallback(e => {
            e.preventDefault();
            setXpos(`${e.pageX - 316}px`);
            setYpos(`${e.pageY - 70}px`);
            setIsVisible(true);
        }, [setXpos, setYpos]
    );

    const handleClick = useCallback(e => {
        e.preventDefault();
        isVisible && setIsVisible(false);
    }, [isVisible]);

    useEffect(() => {
        document.addEventListener('click', handleClick);
        document.addEventListener('contextmenu', handleContextMenu);

        return function cleanUp() {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('contextmenu', handleContextMenu);
        }
    });

    return { xPos, yPos, isVisible };
}