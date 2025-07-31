import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const titleTable: Record<string, string>= {
    "/": "home",
    "/home":"home",
    "/about": "about",
    "/portfolio": "portfolio",
    "/contact": "contact",
}
export default function TitleUpdater() {

    const location = useLocation();

    useEffect(() => {
        document.title = titleTable[location.pathname];
    }, [location.pathname])
    
    return null;
}
