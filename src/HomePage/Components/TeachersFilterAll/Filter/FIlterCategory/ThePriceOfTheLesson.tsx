
import { PriceFilter } from "../../../../Shared/icons/PriceFilter"
import Slider from '@mui/material/Slider';
import * as React from 'react';
import { useContext } from "react";
import '../../../../Shared/Style/TeachersFilter.css'
import { CustomContext } from "../../../../Shared/Context/Context";


function valuetext(value: number) {
    return `${value}°C`;
}

export const ThePriceOfTheLesson = ({data}: any) => {
    const {selectedPrice, setSelectedPrice} = useContext(CustomContext)
    
    const handleChange = (event: Event, newValue: number | number[]) => {
        setSelectedPrice(newValue as number[]);
    };


    return (
        <>

            <div className="container_for_under_line">
                <div className="icons_bautton_container">
                    <div className="click_open_filter_category">
                        <PriceFilter />
                        <div>{data}</div>
                    </div>
                </div>
                <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={selectedPrice}
                        name="price"
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        max={1500}
                        color="secondary"
                    />

            </div>


        </>
    )
}