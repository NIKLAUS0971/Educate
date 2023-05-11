import { Dropdown } from '../Components/Dropdown/Dropdown'
import React, { useState } from 'react'
import '../Shared/Style/Style.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SaveFavoriteItems } from '../Shared/icons/SaveFavoriteItems';
export function Header() {
    const [selectItem, setSelectItem] = useState("Az");
    const navigate = useNavigate()
    return (
        <>
            <div className="banner_wrapper">
                <div className="container">
                    <ul className="firstItem">
                        <li>
                            <Link className="firstChilds" to="about_us">Haqqımızda</Link>
                        </li>
                        <li>
                            <Link className="firstChilds" to="contact">Əlaqə</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="banner_wrapper">
                <div className="container">
                    <div className="navigation_logo_wrapper">
                        <div className="logo">logo</div>
                        <div className="navigation">
                            <ul className="secondItem">
                                <li>
                                    <Link className="secondCilds" to="/">Ana səhifə</Link>
                                </li>
                                <li>
                                    <Link className="secondCilds" to="teachers">Müəllimlər</Link>
                                </li>
                                <li>
                                    <Link className="secondCilds" to="category">Kateqoriylar</Link>
                                </li>
                                <li>
                                    <Link className="secondCilds" to="map">Xəritədə tap</Link>
                                </li>
                            </ul>
                            <form action="" className="header_form">
                                <Dropdown selectItem={selectItem} setSelectItem={setSelectItem} />

                                <button className="save_icon_btn" type='button' style={{background:'none', cursor: 'pointer'}} onClick={() => navigate('basket')}>
                                    <SaveFavoriteItems />
                                </button>
                                <a href="../our progect/Profile settings html/profile settings.html" id="myBtn" className="btn_come_in">Daxil ol</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}