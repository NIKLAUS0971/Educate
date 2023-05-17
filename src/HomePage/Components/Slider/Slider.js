
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderDataArr, iconsSimbol } from './SliderDataArr';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SimpleSlider = () => {

  const navigate = useNavigate()

  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  
  return (
    <Slider {...settings}>
      {SliderDataArr.map((item, index) => {
        return (
          <>
            <div className='card' style={{position:"relative"}} onClick={() => navigate(`/catalog/${item.name}`)}>
              <div className='card-top ' key={index}>
                <img className="category_cards"  src={item.card} />
                <div style={{position:'absolute'}}>{item.iconsSimbol}</div>
                <span className="card_name" >{item.name}</span>
              </div>
            </div>
          </>)
      })}
    </Slider>
  );
}
