import { dataForCheckBox } from "../../HomePage/Shared/BazaData/filterData";
import { CustomContext } from "../../HomePage/Shared/Context/Context";
import { JustDown } from "../../HomePage/Shared/icons/JustDown";
import { useState, useEffect, useContext } from 'react'


export const SelectSity = ({ handleSelectSity }) => {

    const {sity, setSity} = useContext(CustomContext)
    const [isActive, setIsActive] = useState(false)



   


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