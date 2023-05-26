import { dataForCheckBox } from "../../HomePage/Shared/BazaData/filterData";
import { JustDown } from "../../HomePage/Shared/icons/JustDown";
import {useState} from 'react'

export const SelectDistrict =({handleSelectDistrict})=>{
    const options = ["Az", "Ru"]


    const [isActive, setIsActive] = useState(false)
    const [selectItem, setSelectItem] = useState("Rayon seçin");

    const rotate = {
        transform: isActive ? 'rotate(180deg)' : '',
        transition: 'transform 200ms ease',
    }
    return (
        <>
            <label for="" class="label_area">
                <span class="select_subway change_together">Rayon</span>
                <div className="dropdown " style={{ width: '360px', border: "none" }}>
                    <div className="together_input" onClick={(e) => {
                        setIsActive(!isActive)
                    }}>
                        <span>{selectItem}</span>
                        <div style={{ position: 'absolute', left: '282px' }}>
                            <JustDown style={rotate} />
                        </div>
                    </div>
                    {
                        isActive && (
                            <div className="dropdown-content dropdown_content" style={{ width: '360px', top: '41px', border:"none" }}>
                                {dataForCheckBox[3].map((option) => (
                                    <div
                                        key={option.name} onClick={(e) => {
                                            setSelectItem(option.name)
                                            setIsActive(false)
                                            handleSelectDistrict(option.name)
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