import React, { useContext, useState } from "react"
import { LogosFacebook } from "../iconsDushboard/Logos_facebook"
import { LogosGoogle } from "../iconsDushboard/LogosGoogle"

import './Register.css'
import { useNavigate } from "react-router-dom"
import { ClouseEye } from "../iconsDushboard/ClouseEye"
import { OpenEye } from "../iconsDushboard/OpenEye"
import axios from "axios"
import { CustomContext } from "../../../HomePage/Shared/Context/Context"


export const Register = () => {
    const {user, setUser} = useContext(CustomContext)
    const [email, setEmail] = useState('')
    const [eye, setEye] = useState(false)

    const navigate = useNavigate()

    const registerUser =(e)=>{
        e.preventDefault()

        let newUser ={
            name: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value 
        }

        axios.post(`http://localhost:3005/data`, newUser)
        .then((data)=>{
            // console.log(response);
            setUser({
                ...data.data
            })
            localStorage.setItem('user', JSON.stringify ({
                ...data.data
            }))
            navigate('/')
        })
        .catch((err)=>{
            console.log(err);
        }) 
    }
console.log(user);


    return (
        <>
            <div className="container">
                <div className="wrapper_sub_container_">
                    <form className="form_wrapper_" onSubmit={registerUser}>
                        <span className="create_accaunt_">Qeydiyyat</span>
                        <div className="wrapper_for_several_rappers_">
                            <div className="wrapper_for_input_">
                                <label className="several_items_">
                                    <span>Ad, Soyad</span>
                                    <input className="input text_input_" type="text" placeholder="Ad və soyadınızı daxil edin" />
                                </label>
                                <label className="several_items_">
                                    <span>E-poçt</span>
                                    <input  className="input email_input_" type="email" placeholder="E-poçt ünvanızı daxil edin" />
                                </label>

                                <label className="several_items_2 " style={{position:'relative'}}>
                                    <span>Şifrə</span>
                                    <div className="wrapper_input_check_box">
                                        <input className="input password_input_" type={eye ? 'text': 'password'} placeholder="Şifrəni daxil edin" />
                                        <span onClick={()=> setEye(!eye)}>
                                        {
                                            eye ? <OpenEye /> : <ClouseEye />
                                        }
                                        </span>
                                        <label className="label_for_check_box_">
                                            <input type="checkbox" />
                                            <span><a href="#">İstifadəçi şərtləri</a> ilə razıyam</span>
                                        </label>


                                    </div>
                                </label>
                            </div>

                            <div className="wrapper_for_several_elements_">
                                <div className="wrapper_for_button_">
                                    <button type="submit" >Davam et</button>
                                    <div>Hesabınız var?
                                        <span onClick={() => navigate('/login')}> Daxil ol</span>
                                    </div>
                                </div>
                                <div className="other_way_for_create_accaunt">
                                    <span>Bu hesablarla qeydiyyatdan keç:</span>
                                    <div className="wrapper_for_facebook_google_">
                                        <div> <LogosFacebook /> Facebook</div>
                                        <div> <LogosGoogle /> Google</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="img_jpeg"></div>
        </>
    )
}