import { dataForCheckBox } from "../../HomePage/Shared/BazaData/filterData";
import { JustDown } from "../../HomePage/Shared/icons/JustDown";
import { useEffect, useState } from 'react'

export const SelectSubway = ({ handleSelectSubway }) => {

    const [isActive, setIsActive] = useState(false)
    const [subway, setSubway] = useState(() => {
        const saved = localStorage.getItem('subway');
        const initiolValue = JSON.parse(saved)
        return initiolValue || 'Metro seçin'
    });

    useEffect(() => {
        localStorage.setItem('subway', JSON.stringify(subway))
    }, [subway])

    const rotate = {
        transform: isActive ? 'rotate(180deg)' : '',
        transition: 'transform 200ms ease',
    }

    return (
        <>
            <label for="" class="label_area">
                <span class="select_subway change_together">Metro (Ünvana yaxın Metro stansiya)</span>
                <div className="dropdown " style={{ width: '360px', border: "none" }}>
                    <div className="together_input" onClick={(e) => {
                        setIsActive(!isActive)
                    }}>
                        <span>{subway}</span>
                        <div style={{ position: 'absolute', left: '282px' }}>
                            <JustDown style={rotate} />
                        </div>
                    </div>
                    {
                        isActive && (
                            <div className="dropdown-content dropdown_content" style={{ width: '360px', top: '41px', border: "none" }}>
                                {dataForCheckBox[4].map((option) => (
                                    <div
                                        key={option.id} onClick={(e) => {
                                            setSubway(option.name)
                                            setIsActive(false)
                                            handleSelectSubway(option.name)
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

