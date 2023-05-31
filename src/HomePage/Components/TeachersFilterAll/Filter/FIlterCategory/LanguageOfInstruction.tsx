import { useState, useContext } from "react"
import { Down } from "../../../../Shared/icons/Down"
import { GenderOfTheTeacherFilter } from "../../../../Shared/icons/GenderOfTheTeacherFilter"
import { dataForCheckBox } from "../../../../Shared/BazaData/filterData"
import { CustomContext } from "../../../../Shared/Context/Context"
import { SelectLenguage } from "../../../../Shared/icons/SelectLenguage"

export const LanguageOfInstruction = ({ data }: any) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [mouseover, setMouseover] = useState(false)
    const { HandleSelectLanguageOfInstruction } = useContext(CustomContext)

    const ChangeDownIconColor = {
        transform: isActive ? 'rotate(180deg)' : '',
        transition: 'transform 500ms ease',
        fill: isActive ? '#663FD7' : mouseover ? '#663FD7' : ''
    }
    const ChangeIconColor = {
        fill: isActive ? '#663FD7' : mouseover ? '#663FD7' : ''
    }
    const ChangeDataTextColor = {
        color: isActive ? '#663FD7' : mouseover ? '#663FD7' : ''
    }

    return (
        <>
            <div className="container_for_under_line"  >
                <div className="icons_bautton_container" onMouseOver={() => setMouseover(true)} onMouseLeave={() => setMouseover(false)} onClick={(e) => { setIsActive(!isActive) }}>
                    <div className="click_open_filter_category">
                        <SelectLenguage style={ChangeIconColor} />
                        <div style={ChangeDataTextColor}>Tədris dili</div>
                    </div>
                    <Down style={ChangeDownIconColor} />
                </div>
                {
                    isActive && (
                        <div className="dropdown-content drob_down_content_new_class" style={{ width: '100%', marginBottom: '24px' }}>
                            {dataForCheckBox[7].map((item) => {
                                return (
                                    <div key={item.id} className="filter_category_form">
                                        <label className="label_filter">
                                            <input type="checkbox" value={item.id} onChange={(e) => HandleSelectLanguageOfInstruction(item.id)} />
                                            <span className='filter_text'>{item.name}</span>
                                        </label>
                                    </div>
                                )
                            })
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
}

