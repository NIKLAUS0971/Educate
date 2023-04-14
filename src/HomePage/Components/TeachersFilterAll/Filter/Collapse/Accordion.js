import { filterData } from "../../../../Shared/BazaData/filterData"
import { Down } from "../../../../Shared/icons/Down"
import '../../../../Shared/Style/Common.css'
import React, { useState } from 'react';


export const Accordion = ({ data, Icon }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [hover, setHover] = useState(false);
    const [mouseover, setMouseover] = useState(false)
    
    const ChangeDownIconColor = {
        transform: isOpen ? 'rotate(180deg)' : '',
        transition: 'transform 180ms ease',
        fill: isOpen ? '#663FD7' : mouseover ? '#663FD7' : ''
    }
    const ChangeIconColor = {
        fill: isOpen ? '#663FD7' : mouseover ? '#663FD7' : ''
    }
    const ChangeDataTextColor = {
        color: isOpen ? '#663FD7' : mouseover ? '#663FD7' : ''
    }
    const bgColor ={
        backgroundColor: mouseover ? "gray" : null 
    }  
    

    return (
        <>
            <div className="accordion_container" onMouseOver={() => setMouseover(true)} onMouseLeave={() => setMouseover(false)}  onClick={() => setIsOpen(!isOpen)}>
                <button style={bgColor} className="button_container"  >  
                    <div >{Icon}</div> 
                    <div className="title" style={ChangeDataTextColor} >{data}</div>
                </button>
                <Down />
            </div>
        </>
    )
}

