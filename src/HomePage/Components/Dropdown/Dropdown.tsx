
import React, { useState } from 'react'
import { JustDown } from '../../Shared/icons/JustDown'
import { LineLenguage } from '../../Shared/icons/LineLenguage'
import { SortDown } from '../../Shared/icons/SortDown'


export const Dropdown = ({ selectItem, setSelectItem }: any) => {
    
    const options = ["Az", "Ru"]
    const [isActive, setIsActive] = useState(false)

    const rotate ={
        transform: isActive ? 'rotate(180deg)' : '',
        transition: 'transform 200ms ease',
    }

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => {
                setIsActive(!isActive)
            }}>
                <span>{selectItem}</span>
                <div>
                    <JustDown style={rotate}/>
                </div>
            </div>
            {
                isActive && (
                    <div className="dropdown-content">
                        {options.map((option, index) => (
                            <div
                                key={index} onClick={(e) => {
                                    setSelectItem(option)
                                    setIsActive(false)
                                }
                                } className="dropdown-item">
                                {option}
                                
                            </div>
                        ))}
                        <LineLenguage/>
                    </div>
                )
            }
        </div>
    )
}
