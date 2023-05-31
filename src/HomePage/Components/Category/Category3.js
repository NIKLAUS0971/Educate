import { useNavigate } from "react-router-dom"
import { ArrowLookeEveryFhing } from "../../Shared/icons/ArrowLookeEveryFhing"
import { useState } from "react"
import { IconCategory } from "../../Shared/icons/IconCategory"
import { Card } from "../Card/Card"



export function Category3({ it }) {
    const navigate = useNavigate()
    const [mouseover, setMouseover] = useState(false)


    const arrowTransition = {
        transition: mouseover ? '0.50s' : mouseover === false ? '0.50s' : '',
        width: mouseover ? '30px' : '0',
    }
    const textHover = {
        color: mouseover ? '#663FD7' : '',
        transition: mouseover ? '0.50s' : mouseover === false ? '0.50s' : '',
    }
    const border = {
        display: mouseover ? 'flex' : '',
        gap: mouseover ? '10px' : '0',
        heght: mouseover ? '50px' : '0',
    }


    const arr = [
        [{id: 1, category: "İT", name: 'Hamısına bax' },]
    ]


    return (
        <>
            <div className="individual_components">
                {
                    arr[0].map((item, index) => {
                        return (
                            <div key={item.id} className="all_items">
                                <div className="wrapper_for_icon_items">
                                    <IconCategory />
                                    <div className="items2">{item.category}</div>
                                </div>
                                <div className="wrapper_for_btn_right_arrow">
                                    <button style={border} onMouseOver={() => setMouseover(true)} onMouseLeave={() => setMouseover(false)} onClick={() => navigate(`/catalog/${item.category}`)} className="showe_all">
                                        <div style={textHover}>{item.name}</div>
                                        <ArrowLookeEveryFhing style={arrowTransition} />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="only_carts_wrapper">
                    {
                        it.map((elem, index) => {
                            return (
                                <div key={index}>
                                    <Card  data={elem}  />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}