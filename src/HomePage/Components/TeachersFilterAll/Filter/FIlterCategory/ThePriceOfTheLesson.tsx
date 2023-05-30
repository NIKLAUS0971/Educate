import * as React from 'react';
import { PriceFilter } from "../../../../Shared/icons/PriceFilter"
import Slider from '@mui/material/Slider';
import { useContext } from "react";
import { CustomContext } from "../../../../Shared/Context/Context";

import '../../../../Shared/Style/TeachersFilter.css'


function valuetext(value: number) {
    return `${value}°C`;
}

export const ThePriceOfTheLesson = ({ data }: any) => {
    const { selectedPrice, setSelectedPrice } = useContext(CustomContext)

    function handleChange(event: Event, newValue: number | number[]) {
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
                <div className="price_range_slider_container">
                    <div className="min_max_price_container">
                        <div className="select_min_price select_price">Min {selectedPrice[0]} AZN</div>
                        <div className="select_max_price select_price">Max {selectedPrice[1]} AZN</div>
                    </div>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={selectedPrice}
                        name="price"
                        onChange={handleChange}
                        getAriaValueText={valuetext}
                        max={1500}
                        color="secondary"
                        step={10}
                        disableSwap
                    />
                </div>
            </div>
        </>
    )
}