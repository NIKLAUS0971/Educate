import { NotFoundFile } from "../../Shared/icons/NotFoundFile";
import '../../Shared/Style/EmptiFile.css'


export function EmptiFile() {

    return (
        <>
            <div className="banner_wrapper">
                <div className="container">
                    <div className="wrapper_icon">
                    <NotFoundFile />
                            <div className="wrapper_for_text_and_btn">
                                <p className="search_result">Axtarışın nəticəsi tapılmadı</p>
                                <p className="try_again">Lütfən, başqa açar sözlərlə yenidən cəhd edin və ya ümumi termindən istifadə edin</p>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}