import { Facebook } from "../Shared/icons/Facebook";
import { Instagram } from "../Shared/icons/Instagram";
import { Linkedin } from "../Shared/icons/Linkedin";
import { YoutUbe } from "../Shared/icons/YoutUbe";

export function Footer() {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="wrapper_inside_footer">
                        <div className="wrapper_about_low_and_about_us">
                            <div className="all_rights_reserved">© 2022 Domen. Bütün hüquqlar qorunur</div>
                            <ul className="about_as_third_items">
                                <li>
                                    <a className="third_child" href="../our progect/About us/About us.html">Haqqımızda</a>
                                </li>
                                <li>
                                    <a className="third_child" href="../our progect/contact html/contact.html">Əlaqə</a>
                                </li>
                            </ul>
                        </div>
                        <div className="social_network">
                            <div >
                                <Facebook />
                            </div>
                            <div >
                                <Instagram />
                            </div>
                            <div >
                                <Linkedin />
                            </div>
                            <div >
                                <YoutUbe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}