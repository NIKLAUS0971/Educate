import { useContext, useState } from "react"
import { DistrictFilter } from "../../../../Shared/icons/DistrictFilter"
import { Down } from "../../../../Shared/icons/Down"
import { dataForCheckBox } from "../../../../Shared/BazaData/filterData"
import { CustomContext } from "../../../../Shared/Context/Context"

export const District = ({ data }: any) => {
    const [isActive, setIsActive] = useState(false)
    const [mouseover, setMouseover] = useState(false)
    const [item, setSelectItem] = useState("Rayon")
    const {HandleSelectDistrict} = useContext(CustomContext)


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
                    <DistrictFilter style={ChangeIconColor } />
                        <div style={ChangeDataTextColor}>{item}</div>
                    </div>
                    <Down style={ChangeDownIconColor} />
                </div>
                {
                    isActive && (
                        <div className="dropdown-content drob_down_content_new_class" style={{ width: '100%', marginBottom:'24px'}}>
                            {dataForCheckBox[3].map((option, index) => (
                                <option
                                    style={{cursor:'pointer'}}
                                    key={index} value={option.id}  onClick={(e:any) => {setSelectItem(option.name); setIsActive(false); HandleSelectDistrict(option.id)}
                                    } className="dropdown-item dropdown_item_hover_select">
                                    {option.name}
                                </option>
                            ))}
                        </div>
                    )
                }
            </div>
        </>
    )
}
                        
           