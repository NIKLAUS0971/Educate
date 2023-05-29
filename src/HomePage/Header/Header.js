import { Dropdown } from '../Components/Dropdown/Dropdown'
import React, { useState } from 'react'
import '../Shared/Style/Style.css'
import styles from '../Shared/Style/styles.css'
import { NavLink, useNavigate } from 'react-router-dom';
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
                                    <NavLink className="secondCilds" to="/">Ana səhifə</NavLink>
                                </li>
                                <li>
                                    <NavLink className="secondCilds" to="teachers">Müəllimlər</NavLink>
                                </li>
                                <li>
                                    <NavLink className="secondCilds" to="category">Kateqoriylar</NavLink>
                                </li>
                                <li>
                                    <NavLink className="secondCilds" to="map">Xəritədə tap</NavLink>
                                </li>
                            </ul>
                            <form action="" className="header_form">
                                <Dropdown selectItem={selectItem} setSelectItem={setSelectItem} />

                                <button className="save_icon_btn" type='button' style={{ background: 'none', cursor: 'pointer' }} onClick={() => navigate('basket')}>
                                    <SaveFavoriteItems />
                                </button>
                                <button style={{ border: 'none', outline: 'none', cursor:'pointer' }}
                                    type='button' className="btn_come_in"
                                    onClick={() => navigate('/register')}
                                >Daxil ol</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}