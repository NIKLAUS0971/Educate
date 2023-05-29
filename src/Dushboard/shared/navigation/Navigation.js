import { NavLink } from "react-router-dom"
import { IconsForDushboard1 } from "../iconsDushboard/IconsForDushboard1"
import { IconsForDushboard2 } from "../iconsDushboard/IconsForDushboard2"
import { IconsForDushboard3 } from "../iconsDushboard/IconsForDushboard3"
import { IconsForDushboard4 } from "../iconsDushboard/IconsForDushboard4"

export const Navigation = () => {

    return (
        <>
            <nav className="inforemation_about_contact_address">
                <NavLink className="  information secondCilds" to='/personal_information'>
                    <IconsForDushboard1 />
                    <p className="studies_information ">Şəxsi məlumatlar</p>
                </NavLink>

                <NavLink className=" teaching information secondCilds" to='/lessons_settings'>
                    <IconsForDushboard2 />
                    <p className="studies_information ">Tədris məlumatları</p>
                </NavLink>

                <NavLink className=" className_address information secondCilds" to='/lesson_address'>
                    <IconsForDushboard3 />
                    <p className="studies_information">Dərsin ünvanı</p>
                </NavLink>

                <NavLink className="contacts_info_contacts information secondCilds" to='/contacts_dushboard'>
                    <IconsForDushboard4 />
                    <p className="studies_information">Əlaqə vasitələri</p>
                </NavLink>
            </nav>
        </>
    )
}