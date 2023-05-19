import React, { useContext } from 'react'
import { CustomContext } from '../Context/Context'
import { RatingStart } from '../icons/RatingStar'
import { NoFavorite } from '../icons/NoFavorite'
// import Rectangly111 from "../../../Shared/foto/Rectangly111.png"
import Rectangly111 from "../foto/Rectangly111.png"





export const Basket = () => {
    const { basket} = useContext(CustomContext)
    return (
        <>
       
         <div className="banner_banner_wrapper">
                <div className="container">
                    <div className="wrapper_inside_history_back">
                        <a className="Home_page" href="../index.html">Ana səhifə</a>
                        <p className="className">/</p>
                        <p className="className">Müəllimlər</p>
                    </div>
                </div>
            </div>
            <div className="banner_wrapper">
                <div className="container">
                    <div className='favorites_card' style={{margin: '36px 0 30px 0'}}>Sevimlilər</div>
                    <div className=" all_cart_and_filter_save_favorites " style={{flexWrap: "wrap", gap: "21px"}}>
                    { basket.length === 0 ? <NoFavorite />: 
                     basket.map((item, index) => {
                            return (
                                <>
                                    <div className="carts cart1">
                                        <div className="information_about_teacher">
                                            <div className="foto_information_and_icon_teacher">
                                                <img src={Rectangly111} alt="" />
                                                <a href="../our progect/Teachers card/Teachers card.html" className="foto_information_teacher">
                                                    <div className="foto_teacher">

                                                    </div>
                                                    <div className="information_teacher">
                                                        <p className="text_name">{item.title}</p>
                                                        <p className="about_teacher_job">{item.profetion}</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="wrapper_rating">
                                                <div className="rating">
                                                    <p className="rating_number">{item.rating} <RatingStart /></p>
                                                </div>
                                            </div>
                                            <a href="../our progect/Teachers card/Teachers card.html" className="wrapper_about_price_location_and_litle_about_teacher">
                                                <div className="litle_about_teacher">{item.description}</div>
                                            </a>
                                            <div className="wrapper_about_price">
                                                <div className="about_price">
                                                    <div className="price several">

                                                        <p className="month_price">Aylıq ödəniş:</p>
                                                    </div>
                                                    <p className="payment">{item.price} Azn</p>
                                                </div>
                                            </div>
                                            <div className="wrapper_location several">

                                                <p className="month_price">{item.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            )
                        })
                }
                    </div>
                </div>
            </div>
           
        </>
    )
}