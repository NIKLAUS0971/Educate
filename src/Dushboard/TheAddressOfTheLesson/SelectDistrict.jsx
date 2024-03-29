import { dataForCheckBox } from "../../HomePage/Shared/BazaData/filterData";
import { JustDown } from "../../HomePage/Shared/icons/JustDown";
import { useEffect, useState } from 'react'

export const SelectDistrict = ({ handleSelectDistrict }) => {

    const [isActive, setIsActive] = useState(false)
    const [district, setDistrict] = useState(() => {
        const saved = localStorage.getItem('district');
        const initiolValue = JSON.parse(saved)
        return initiolValue || 'Rayon seçin'
    });

    useEffect(() => {
        localStorage.setItem('district', JSON.stringify(district))
    }, [district])

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
                        <span>{district}</span>
                        <div style={{ position: 'absolute', left: '282px' }}>
                            <JustDown style={rotate} />
                        </div>
                    </div>
                    {
                        isActive && (
                            <div className="dropdown-content dropdown_content" style={{ width: '360px', top: '41px', border: "none" }}>
                                {dataForCheckBox[3].map((option) => (
                                    <div
                                        key={option.name} onClick={(e) => {
                                            setDistrict(option.name)
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