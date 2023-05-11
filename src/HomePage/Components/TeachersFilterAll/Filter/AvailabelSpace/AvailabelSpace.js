import React from 'react'
import { useEffect, useState } from "react";
export const AvailableSpace = ({ handleFirstAvailableSpace, handleSecondAvailableSpace }) => {
    const [available, setAvailable] = useState(false)

    const firstAvailableStyle = {

        background: available ? '#F8FAFF' : null,
        border: available ? '1px solid #7F5AF0' : null,
        color: available ? '#7F5AF0' : null,

    }
    const secondAvailableStyle = {
        background: !available ? '#F8FAFF' : null,
        border: !available ? '1px solid #7F5AF0' : null,
        color: !available ? '#7F5AF0' : null,
    }


    return (
        <div className="tabs_head">
            <button className="tab1 tabs_toggle is-active" type='button' style={secondAvailableStyle} onClick={() => handleSecondAvailableSpace('everyBody', setAvailable(false))}>Hamısı</button>
            <button className="tab2 tabs_toggle" type='button' style={firstAvailableStyle} onClick={() => handleFirstAvailableSpace('true', setAvailable(true))}>Yer olan</button>
        </div>
    )
}
