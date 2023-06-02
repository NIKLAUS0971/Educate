import { dataForCheckBox } from "../../HomePage/Shared/BazaData/filterData";
import { JustDown } from "../../HomePage/Shared/icons/JustDown";
import { useState, useEffect } from 'react'


export const SelectSity = ({ handleSelectSity }) => {

    const [isActive, setIsActive] = useState(false)
    const [sity, setSity] = useState(() => {
        const saved = localStorage.getItem('sity');
        const initiolValue = JSON.parse(saved)
        return initiolValue || 'Şəhər seçin'
    });

    useEffect(() => {
        localStorage.setItem('sity', JSON.stringify(sity))
    }, [sity])


    const rotate = {
        transform: isActive ? 'rotate(180deg)' : '',
        transition: 'transform 200ms ease',
    }

    return (
        <>
            <label for="" class="label_area">
                <span class="select_subway change_together">Şəhər</span>
                <div className="dropdown " style={{ width: '360px', border: "none" }}>
                    <div className="together_input" onClick={(e) => {
                        setIsActive(!isActive)
                    }}>
                        <span >{sity}</span>
                        <div style={{ position: 'absolute', left: '282px' }}>
                            <JustDown style={rotate} />
                        </div>
                    </div>
                    {
                        isActive && (
                            <div className="dropdown-content dropdown_content" style={{ width: '360px', top: '41px', zIndex: '3', border: 'none' }}>
                                {dataForCheckBox[2].map((option) => (
                                    <div
                                        key={option.name} onClick={(e) => {
                                            setSity(option.name)
                                            setIsActive(false)
                                            handleSelectSity(option.name)
                                        }
                                        } className="dropdown-item dropdown_item">
                                        {option.name}
                                    </div>
                                ))}
                            </div>
                        )
                    }
                </div>
            </label>
        </>
    )
}