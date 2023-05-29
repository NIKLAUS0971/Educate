import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export const WrapperForFooter =({children}) =>{
    const [showFooter, setShowFooter] = useState(false)
    const location = useLocation()
    useEffect(()=>{
        if(location.pathname === '/register' || location.pathname === '/login'){
            setShowFooter(false)
        }else{
            setShowFooter(true)
        }
    }, [location])
    return(
        <>
            <div>{showFooter && children}</div>
        </>
    )
}