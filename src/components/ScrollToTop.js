import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Simple component responsible for scroll the page all the way to the top on page transitions
 *
 * @returns {null}
 * @constructor
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}