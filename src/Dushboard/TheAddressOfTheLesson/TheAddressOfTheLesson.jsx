import '../TheAddressOfTheLesson/StyleDushboard.css'
import FindeOnTheMap from '../../HomePage/Shared/foto/FindeOnTheMap.png'
import { SelectSity } from './SelectSity'
import { SelectDistrict } from './SelectDistrict'
import { SelectSubway } from './SelectSubway'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { CustomContext } from '../../HomePage/Shared/Context/Context'

import axios from 'axios'
import { Navigation } from '../shared/navigation/Navigation'


export function TheAddressOfTheLesson() {
    const { handleSelectDistrict, address, handleSelectSity, handleSelectSubway, handleWriteExactAddress, handleSetTheAddressOnTheMap } = useContext(CustomContext)

    const navigate = useNavigate()

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
                        <p href="#" className="goBack">Profil</p>
                    </div>
                </div>
            </div>
            <div className="banner_wrapper_banner_">
                <div className="container">
                    <div className="wrapper_for_profil">
                        <Navigation />
                        <form >
                            <div className="wrapper_the_address_of_the_lesson">
                                <div className="title_text">
                                    <span>Dərsin  ünvanı</span>
                                </div>
                                <div className="wrapper_select_area" >
                                    <div className="select_area">
                                        <SelectSity handleSelectSity={handleSelectSity} />
                                        <SelectDistrict handleSelectDistrict={handleSelectDistrict} />
                                        <SelectSubway handleSelectSubway={handleSelectSubway} />
                                        <label for="" className="label_area">
                                            <span className="select_exact_address change_together">Dəqiq Ünvan</span>
                                            <input onChange={handleWriteExactAddress} type="text" className="exact_address_input together_input" placeholder="Küçə / Bina / Blok / Mərtəbə" />
                                        </label>
                                        <label for="" className="label_area label_alone">
                                            <div className="wrapper_for_input_and_text">
                                                <span className="select_set_the_address_on_the_map change_together">Xəritədə ünvanı təyin edin</span>
                                                <input value={address} onChange={handleSetTheAddressOnTheMap} type="text" className="set_the_address_on_the_map_input together_input" placeholder="Axtar" />
                                            </div>
                                            <img className='mark_on_the_map' src={FindeOnTheMap} alt="" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper_click_btn_next">
                                <div className="container">
                                    <span className="btn_next">
                                        <button type='submit' onClick={() => navigate('/contacts_dushboard')} className="btnNext">Növbəti</button>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}