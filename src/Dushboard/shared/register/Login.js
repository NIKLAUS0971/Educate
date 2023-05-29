import { useNavigate } from "react-router-dom"
import { LogosFacebook } from "../iconsDushboard/Logos_facebook"
import { LogosGoogle } from "../iconsDushboard/LogosGoogle"

export const Login = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="container">
                <div className="wrapper_sub_container_">
                    <form className="form_wrapper_">
                        <span className="create_accaunt_">Daxil ol</span>
                        <div className="wrapper_for_several_rappers_">
                            <div className="wrapper_for_input_">
                                <label className="several_items_">
                                    <span>E-poçt</span>
                                    <input className="input email_input_" type="email" placeholder="E-poçt ünvanızı daxil edin" />
                                </label>
                                <label className="several_items_">
                                    <span>Şifrə</span>
                                    <div className="wrapper_input_check_box">
                                        <input className="input password_input_" type="password" placeholder="Şifrəni daxil edin" />
                                        <div className="label_for_check_box_">
                                            <a href="#" style={{textDecoration:"none"}}>Şifrəni unutmusunuz?</a>
                                        </div>
                                    </div>
                                </label>
                            </div>

                            <div className="wrapper_for_several_elements_">
                                <div className="wrapper_for_button_">
                                    <button type="submit" onClick={()=> navigate('/personal_information')}>Daxil ol</button>
                                    <div>Mövcud hesabınız yoxdur?
                                        <span onClick={()=> navigate('/register')}> Qeydiyyatdan keçin</span>
                                    </div>
                                </div>
                                <div className="other_way_for_create_accaunt">
                                    <span>Bu hesablarla daxil ol:</span>
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