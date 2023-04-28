import { useState } from "react"
import { Down } from "../../../../Shared/icons/Down"
import { TerritoryFilter } from "../../../../Shared/icons/TerritoryFilter"

export const Territory = ({ data }: any) => {
    const [isOpen, setIsOpen] = useState(false)
    const [mouseover, setMouseover] = useState(false)

    const ChangeDownIconColor = {
        transform: isOpen ? 'rotate(180deg)' : '',
        transition: 'transform 500ms ease',
        fill: isOpen ? '#663FD7' : mouseover ? '#663FD7' : ''
    }
    const ChangeIconColor = {
        fill:  isOpen ? '#663FD7' : mouseover ? '#663FD7' : ''
    }
    const ChangeDataTextColor = {
        color: isOpen ? '#663FD7' : mouseover ? '#663FD7' : ''
    }

    return (
        <>
            <div className="container_for_under_line">
                <button onMouseOver={() => setMouseover(true)} onMouseLeave={() => setMouseover(false)} className="icons_bautton_container" onClick={() => setIsOpen(!isOpen)} type="button" >
                    <div className="click_open_filter_category">
                        <TerritoryFilter  style={ChangeIconColor }/>
                        <div style={ChangeDataTextColor } >{data}</div>
                    </div>
                    <Down style={ChangeDownIconColor} />
                </button>
                {
                    isOpen ? <><form className="filter_category_form">
                        <label className="label_filter">
                            <input type="checkbox" />
                            <span className='filter_text'>Territory</span>
                        </label>
                    </form></> : null
                }
            </div>
        </>
    )
}