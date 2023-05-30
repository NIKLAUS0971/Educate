import * as React from 'react';
import { CustomContext } from "../../../Shared/Context/Context"
import Rectangly111 from "../../../Shared/foto/Rectangly111.png"
import { AddItemToBasket } from "../../../Shared/icons/AddItemToBasket"
import { RatingStart } from "../../../Shared/icons/RatingStar"
import { EmptiFile } from "../../EmptiFile/EmptiFile"
import { useContext, useState, useEffect } from 'react'
import { CircularProgress } from '@mui/material';
import { SaveItemToBasket } from '../../../Shared/icons/SaveItemToBasket';
import { TeacherProfile } from '../../../../Dushboard/TeacherProfile/TeacherProfile';
import { useNavigate } from 'react-router-dom';
// import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';




export function AllCard({ coinsData, loading }) {
    // const { addBasket } = useContext(CustomContext)
    const [active, setActive] = useState(false)
    const navigate = useNavigate()
    const { addBasket, setDataList, dataList, fetchData, setBasket } = useContext(CustomContext)

    // useEffect(()=>{
    //     setBasket(JSON.parse(localStorage.setItem('favorites')))
    // }, [])

    // useEffect(()=>{
    //     // fetchData()
    // },[])


    return (
        <>
            <div className='anly_all_card' >

                {coinsData.length === 0 ?
                    <EmptiFile /> : coinsData.map((item, index) => {

                        return (


                            <div key={item.id} className="carts cart1" onClick={() => navigate(`/teacher_profile/${item.id}`)} >
                                <div className="information_about_teacher">
                                    <div className="foto_information_and_icon_teacher">
                                        <img src={Rectangly111} alt="" />
                                        <a className="foto_information_teacher">
                                            <div className="foto_teacher">

                                            </div>
                                            <div className="information_teacher">
                                                <p className="text_name">{item.userId}</p>
                                                <p className="about_teacher_job">{item.profetion}</p>
                                            </div>
                                        </a>
                                        <div data-id={item.id} onClick={() => addBasket(item, setActive(!active))}>
                                            <AddItemToBasket />
                                        </div>
                                    </div>
                                    <div className="wrapper_rating">
                                        <div className="rating">
                                            <p className="rating_number">{item.rating} <RatingStart /></p>
                                        </div>
                                    </div>
                                    <a className="wrapper_about_price_location_and_litle_about_teacher">
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

                                        <p className="month_price">{item.city_id}, {item.region_id}, {item.address_text}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
