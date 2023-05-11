import axios from "axios"
import React, { useContext } from "react"
import { useState, useEffect } from 'react'
import { CustomContext } from "../Shared/Context/Context"
import { SliderDataArr } from "../Components/Slider/SliderDataArr"
import { useNavigate } from "react-router-dom"

export function Category() {
    const navigate = useNavigate()


    return (
        <>
            <div className="banner_banner_wrapper">
                <div className="container">
                    <div className="wrapper_inside_history_back">
                        <a className="Home_page" href="../index.html">Ana səhifə</a>
                        <p className="className">/</p>
                        <p className="className">Kategoriyalar</p>
                    </div>
                </div>
            </div>
            <div className="banner_wrapper">
                <div className="container">
                    <div className='favorites_card' style={{ margin: '36px 0 30px 0' }}>Kategoriyalar</div>
                    <div className="all_cart_and_filter all_cart_and_filter_save_favorites " style={{ flexWrap: "wrap", gap: "24px" }}>
                        {SliderDataArr.map((item, index) => (
                            <div className='card' style={{width:'252px'}} onClick={() => navigate(`/catalog/${item.name}`)}>
                                <div className='card-top ' key={index}>
                                    <img className="category_cards" src={item.card} />
                                    <span className="card_name" >{item.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}