import { useState, useContext } from "react"
import { Down } from "../../../../Shared/icons/Down"
import { TypeOfStudyFilter } from "../../../../Shared/icons/TypeOfStudyFilter"
import { dataForCheckBox } from "../../../../Shared/BazaData/filterData"
import { CustomContext } from "../../../../Shared/Context/Context"



export const TypeOfStudy = ({ data }: any) => {
    const [isActive, setIsActive] = useState(false)
    const [mouseover, setMouseover] = useState(false)
    const [item, setSelectItem] = useState("Tədris növü")
    const { HandleSelectTypeOfStudy } = useContext(CustomContext)

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
            <div className="container_for_under_line" >
                <div className="icons_bautton_container" onMouseOver={() => setMouseover(true)} onMouseLeave={() => setMouseover(false)} onClick={(e) => { setIsActive(!isActive) }}>
                    <div className="click_open_filter_category">
                        <TypeOfStudyFilter style={ChangeIconColor} />
                        <div style={ChangeDataTextColor}>{item}</div>
                    </div>
                    <Down style={ChangeDownIconColor} />
                </div>
                {
                    isActive && (
                        <div className="dropdown-content drob_down_content_new_class" style={{ width: '100%', marginBottom: '24px' }}>
                            {dataForCheckBox[6].map((item) => {
                                return (
                                    <div key={item.id} className="filter_category_form">
                                        <label className="label_filter">
                                            <input type="checkbox" value={item.id} onChange={(e) => HandleSelectTypeOfStudy(item.id)} />
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
