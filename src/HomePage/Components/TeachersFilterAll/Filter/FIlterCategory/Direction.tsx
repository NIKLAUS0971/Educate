import { useState, useContext } from "react"
import { DirectionFilter } from "../../../../Shared/icons/DirectionFilter"
import { Down } from "../../../../Shared/icons/Down"
import { dataForCheckBox } from "../../../../Shared/BazaData/filterData"
import { CustomContext } from "../../../../Shared/Context/Context"

export const Direction = ({ data }: any) => {
    const [isOpen, setIsOpen] = useState(false)
    const [mouseover, setMouseover] = useState(false)
    const { HandleSelectDirection } = useContext(CustomContext)
    const ChangeDownIconColor = {
        transform: isOpen ? 'rotate(180deg)' : '',
        transition: 'transform 500ms ease',
        fill: isOpen ? '#663FD7' : mouseover ? '#663FD7' : ''
    }
    const ChangeIconColor = {
        fill: isOpen ? '#663FD7' : mouseover ? '#663FD7' : ''
    }
    const ChangeDataTextColor = {
        color: isOpen ? '#663FD7' : mouseover ? '#663FD7' : ''
    }


    return (
        <>
            <div className="container_for_under_line">
                <button onMouseOver={() => setMouseover(true)} onMouseLeave={() => setMouseover(false)} className="icons_bautton_container" onClick={() => setIsOpen(!isOpen)} type="button" >
                    <div className="click_open_filter_category">
                        <DirectionFilter style={ChangeIconColor} />
                        <div style={ChangeDataTextColor}>{data}</div>
                    </div>
                    <Down style={ChangeDownIconColor} />
                </button>
                <form action="">
                    {
                        isOpen ? <><div style={{ marginBottom: '24px' }}>
                            {dataForCheckBox[1].map((item) => {
                                return (
                                    <div key={item.id} className="filter_category_form">
                                        <label className="label_filter">
                                            <input type="checkbox" value={item.id} onChange={(e) => HandleSelectDirection(item.id)} />
                                            <span className='filter_text'>{item.name}</span>
                                        </label>
                                    </div>

                                )
                            })}
                        </div>
                        </> : null
                    }
                </form>
            </div>
        </>

    )
}