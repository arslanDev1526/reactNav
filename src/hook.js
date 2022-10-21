import { useEffect, useState } from "react"


export const useMobile = (givenWidth = 375) => {
    const [width, setWidth] = useState(window.outerWidth)

    const handleResize = () => setWidth(window.outerWidth)
    
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return _ => window.removeEventListener('resize', handleResize)
    })

    return width <= givenWidth;

}