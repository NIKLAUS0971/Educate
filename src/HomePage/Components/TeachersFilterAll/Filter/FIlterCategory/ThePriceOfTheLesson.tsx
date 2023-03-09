import { useState } from "react"
import { Down } from "../../../../Shared/icons/Down"
import { PriceFilter } from "../../../../Shared/icons/PriceFilter"
import Slider from '@mui/material/Slider';
import * as React from 'react';
import { useEffect } from "react";

import '../../../../Shared/Style/TeachersFilter.css'


function valuetext(value: number) {
    return `${value}°C`;
}

export const ThePriceOfTheLesson = ({ data, selectedPrice, setSelectedPrice }: any) => {

    const [isOpen, setIsOpen] = useState(false)
    const [mouseover, setMouseover] = useState(false)
    // const [selectedPrice, setSelectedPrice] = React.useState<number[]>([100, 500]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setSelectedPrice(newValue as number[]);
    };

    const ChangeDownIconColor = {
        transform: isOpen ? 'rotate(180deg)' : '',
        transition: 'transform 180ms ease',
        fill: isOpen ? '#663FD7' : mouseover ? '#663FD7' : ''
    }
    const ChangeIconColor = {
        fill: isOpen ? '#663FD7' : mouseover ? '#663FD7' : ''
    }
    const ChangeDataTextColor = {
        color: isOpen ? '#663FD7' : mouseover ? '#663FD7' : ''
    }

    // const applyFilters = () => {
    //     let updateList = elems

    //     const minPrice = selectedPrice[0]
    //     const maxPrice = selectedPrice[1]

    //     updateList = updateList.filter((item: any) => item.price >= minPrice && item.price <= maxPrice);
        
    //     setList(updateList)
    // }


    // useEffect(() => {
    //     applyFilters()
    // }, [selectedPrice])

    return (
        <>

            <div className="container_for_under_line">
                <button onMouseOver={() => setMouseover(true)} onMouseLeave={() => setMouseover(false)} className="icons_bautton_container" onClick={() => setIsOpen(!isOpen)} type="button" >
                    <div className="click_open_filter_category">
                        <PriceFilter style={ChangeIconColor} />
                        <div style={ChangeDataTextColor} >{data}</div>
                    </div>
                    <Down style={ChangeDownIconColor} />
                </button>
                {
                    isOpen ? <><Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={selectedPrice}
                        name="price"
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        max={500}
                        color="secondary"
                    /></> : null
                }

            </div>


        </>
    )
}