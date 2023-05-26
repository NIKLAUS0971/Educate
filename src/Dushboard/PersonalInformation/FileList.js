import { CustomContext } from "../../HomePage/Shared/Context/Context"
import { useContext } from 'react'
import { FileItem } from "./FileItem"

export const FileList = ({ isImageOrPdfURL }) => {
    
    return (
        <>
            <ul class="certificate">
                {/* <li>
                    <img style={{ width: "52px", height: "60px" }} value={isImageOrPdfURL} src={isImageOrPdfURL ? isImageOrPdfURL : 'no foto'} />
                </li> */}
                {
                    isImageOrPdfURL &&
                    isImageOrPdfURL.map(item=><FileItem 
                   key={item.name}
                   file={item} />)
                }
            </ul>
        </>
    )
}