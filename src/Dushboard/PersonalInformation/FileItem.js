import React from "react"

export const FileItem=({file})=>{
    return(
        <>
        <li key={file.name}>
            {file.name}
        </li>
        </>
    )
}