import { useEffect } from "react";

export function useClickOutside(ref: any, callback: any) {    
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}
