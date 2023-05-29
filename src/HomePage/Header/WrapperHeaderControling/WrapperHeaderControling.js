import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export const WrapperHeaderControling = ({ children }) => {
    const [showNavbar, setShowNavbar] = useState(false)
    const location = useLocation()
    useEffect(() => {
        // console.log('lll', location);
        if(location.pathname === '/register' || location.pathname === '/login'){
            setShowNavbar(false)
        }else{
            setShowNavbar(true)
        }
    }, [location])
    return (
        <>
            <div>{showNavbar && children}</div>
        </>
    )
}