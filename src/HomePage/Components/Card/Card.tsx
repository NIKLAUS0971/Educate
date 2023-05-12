
// import { IData, IData2 } from "../../Modul/Modul"
import { Location } from "../../Shared/icons/Location"
import { Payment } from "../../Shared/icons/Payment"

import Rectangly111 from '../../Shared/foto/Rectangly111.png'
import { Star } from "../../Shared/icons/Star"
import { useContext } from "react"
import { CustomContext } from "../../Shared/Context/Context"
import { SaveFavoriteItems } from "../../Shared/icons/SaveFavoriteItems"




export function Card(props: any) {

    const {addBasket, basket} = useContext(CustomContext)

    return (
        <div className="carts cart1">
            <div className="information_about_teacher">
                <div className="foto_information_and_icon_teacher">
                    <a href="../our progect/Teachers card/Teachers card.html" className="foto_information_teacher">
                        <div className="foto_teacher">
                            <img src={Rectangly111} alt="" />
                        </div>
                        <div className="information_teacher">
                            <p className="text_name">{props.data.title}</p>
                            <p className="about_teacher_job">{props.data.profetion}</p>
                        </div>
                    </a>
                    <button style={{height: "22px", width: "30px", background:'none', border:"none", cursor:"pointer"}} onClick={()=>addBasket(props.data)}><SaveFavoriteItems /></button>
                </div>
                <div className="wrapper_rating">
                    <div className="rating">
                        <p className="rating_number">{props.data.rating}</p>
                        <Star />
                    </div>
                </div>
                <a href="../our progect/Teachers card/Teachers card.html" className="wrapper_about_price_location_and_litle_about_teacher">
                    <div className="litle_about_teacher">{props.data.description}</div>
                </a>
                <div className="wrapper_about_price">
                    <div className="about_price">
                        <div className="price several">
                            <Payment />
                            <p className="month_price">Aylıq ödəniş:</p>
                        </div>
                        <p className="payment">{props.data.price}Azn</p>
                    </div>
                </div>
                <div className="wrapper_location several">
                    <Location />
                    <p className="month_price">{props.data.location}</p>
                </div>
            </div>
        </div>
    )
}