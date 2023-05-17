import React from "react";
import { useState } from "react"


function setCountSum(n){
    console.log(n);
    return n 
}



export function OnTheMap(){ 

    const [num, setNum] = useState('')
    const [green, setGreen]= useState(false)

    // const countSum = React.useMemo(()=>setCountSum(num), [num])
    const countSum = setCountSum(num)
    return(
        <>
        <p style={{color: green? 'green': 'red'}} onClick={()=>setGreen(!green)} >sdcdscsdcsd</p>
        {countSum}
            <button onClick={()=>setNum('hello')} >click</button>
        </>
    )
}