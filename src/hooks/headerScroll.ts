import {useEffect, useState} from "react";

export const useHeaderScroll = () => {
    const [isFixed, setIsFixed] = useState(false)

    window.addEventListener('scroll', (e) => {
        if(window.pageYOffset > 0) {
            setIsFixed(true)
        } else {
            setIsFixed(false)
        }
    })

    return {isFixed}
}