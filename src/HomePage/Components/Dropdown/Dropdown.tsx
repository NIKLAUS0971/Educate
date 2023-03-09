
import React, { useState } from 'react'
import { Down } from '../../Shared/icons/Down'
import { LineLenguage } from '../../Shared/icons/LineLenguage'


export const Dropdown = ({ selectItem, setSelectItem }: any) => {
    const options = ["Az", "Ru"]
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => {
                setIsActive(!isActive)
            }}>
                <span>{selectItem}</span>
                <div>
                    <Down />
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
