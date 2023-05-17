import { useContext, useState } from "react"
import { CityFilter } from "../../../../Shared/icons/CityFilter"
import { Down } from "../../../../Shared/icons/Down"
import { dataForCheckBox } from "../../../../Shared/BazaData/filterData"
import { CustomContext } from "../../../../Shared/Context/Context"

export const City = ({ data }: any) => {
    const [isActive, setIsActive] = useState(false)
    const [mouseover, setMouseover] = useState(false)
    const [item, setSelectItem] = useState("Şəhər")

    const {HandleSelectSity} = useContext(CustomContext)


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
                        <CityFilter style={ChangeIconColor} />
                        <div style={ChangeDataTextColor}>{item}</div>
                    </div>
                    <Down style={ChangeDownIconColor} />
                </div>
                {
                    isActive && (
                        <div className="dropdown-content drob_down_content_new_class" style={{ width: '100%', marginBottom:'24px'}}>
                            {dataForCheckBox[2].map((option, index) => (
                                <div
                                    style={{cursor:'pointer'}}
                                    key={index} onClick={(e) => {setSelectItem(option.name); setIsActive(false); HandleSelectSity(option.id)
                                    }
                                    } className="dropdown-item dropdown_item_hover_select">
                                    {option.name}
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>

        </>
    )
}