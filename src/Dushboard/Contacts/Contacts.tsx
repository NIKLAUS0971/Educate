import React from "react"

import { CustomContext } from "../../HomePage/Shared/Context/Context"
import { useContext } from 'react'
import { Navigation } from '../shared/navigation/Navigation'

import '../Contacts/ContactDushboard.css'

export const Contacts = () => {

    const {
        phoneNumber,
        isInstagram,
        isLinkedin,
        isYoutube,
        isYourEmail,
        isFacebook,
        handleWritwPhoneNumber,
        createnewPersonCard,
        handleWriteFacebook,
        handleWriteInstagram,
        handleWriteLinkedin,
        handleWriteIsYourEmail,
        handleWriteYoutube 
    } = useContext(CustomContext)

    return (
        <>
            <div className="wrapper_banner_wrapper">
                <div className="container">
                    <div className="wrapper_inside_history_back">
                        <a className="Home_page" href="../index.html">Ana səhifə</a>
                        <p className="teachers1">/</p>
                        <a className="Home_page" href="../Teachers/teachers.html">Müəllimlər</a>
                        <p className="teachers">/</p>
                        <p className="teachers">Murad Vahubov</p>
                    </div>
                </div>
            </div>
            <div className="banner_wrapper_banner_">
                <div className="container">
                    <div className="wrapper_go_back_navigation">
                        <p className="goBack">Profil</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="create_wrapper_for_space_between">
                    <Navigation />
                    <form onSubmit={createnewPersonCard}>
                        <div className="wrapper_connection">
                            <div className="title_text">
                                <span>Əlaqə vasitələri</span>
                            </div>
                            <div className="wrapper_input_connection" >
                                <label className="label_connection">
                                    <span className="write_mobile_number change_together">Mobil</span>
                                    <input value={phoneNumber} onChange={handleWritwPhoneNumber} type="text" className="mobile connection" placeholder="+994 __ ___ __ __" />
                                </label>
                                <label className="label_connection">
                                    <span className="write_email change_together">E-poçt</span>
                                    <input value={isYourEmail} onChange={handleWriteIsYourEmail} type="email" className="email connection" placeholder="E-poçt ünvanızı daxil edin" />
                                </label>
                                <label className="label_connection">
                                    <span className="write_facebook change_together">Facebook</span>
                                    <input value={isFacebook} type="text" onChange={handleWriteFacebook} className="facebook connection" placeholder="Facebook linkini daxil edin" />
                                    <img className="iconNetWork" src="../icon/f-gr.svg" alt="" />
                                </label>
                                <label className="label_connection">
                                    <span className="write_instagram change_together">İnstagram</span>
                                    <input value={isInstagram} type="text" onChange={handleWriteInstagram} className="instagram connection" placeholder="İnstagram linkini daxil edin" />
                                    <img className="iconNetWork" src="../icon/ins-gr.svg" alt="" />
                                </label>
                                <label className="label_connection">
                                    <span className="write_linkedin change_together">Linkedin</span>
                                    <input value={isLinkedin} type="text" onChange={handleWriteLinkedin} className="linkedin connection" placeholder="Linkedin linkini daxil edin" />
                                    <img className="iconNetWork" src="../icon/in-gr.svg" alt="" />
                                </label>
                                <label className="label_connection">
                                    <span className="write_youtube change_together">Youtube</span>
                                    <input value={isYoutube} type="text" onChange={handleWriteYoutube} className="youtube connection" placeholder="Youtube linkini daxil edin" />
                                    <img className="iconNetWork" src="../icon/yout-gr.svg" alt="" />
                                </label>
                            </div>
                        </div>
                        <div className="wrapper_click_btn_next">
                            <div className="container">
                                <span className="btn_next">
                                    <button type='submit' className="btnNext">Tamamla</button>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}