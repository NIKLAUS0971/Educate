import { JustDown } from '../../HomePage/Shared/icons/JustDown';
import { dataForCheckBox } from '../../HomePage/Shared/BazaData/filterData';
import { useContext, useState } from 'react';
import { CustomContext } from '../../HomePage/Shared/Context/Context';



export const SelectSubjectLesson = () => {
    const {isSubject, setIsSubject} = useContext(CustomContext)
    const [isActive, setIsActive] = useState(false)

    const rotate = {
        transform: isActive ? 'rotate(180deg)' : '',
        transition: 'transform 200ms ease',
    }
    return (
        <>
            <label for="" class="label_area">
                <span class="select_subway change_together">Fənn</span>
                <div className="dropdown " style={{ width: '360px', border: "none" }}>
                    <div className="together_input" onClick={(e) => {
                        setIsActive(!isActive)
                    }}>
                        <span>{isSubject}</span>
                        <div style={{ position: 'absolute', left: '282px' }}>
                            <JustDown style={rotate} />
                        </div>
                    </div>
                    {
                        isActive && (
                            <div className="dropdown-content dropdown_content" style={{ width: '360px', top: '41px', border: "none" }}>
                                {dataForCheckBox[0].map((option) => (
                                    <option
                                        key={option.name} onClick={(e) => {
                                            setIsSubject(option.name)
                                            setIsActive(false)
                                        }
                                        } className="dropdown-item dropdown_item">
                                        {option.name}

                                    </option>
                                ))}
                            </div>
                        )
                    }
                </div>
            </label>
        </>
    )
}