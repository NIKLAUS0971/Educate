import { useNavigate } from "react-router-dom"
import Rectangly111 from '../../HomePage/Shared/foto/Rectangly111.png'
import '../PersonalInformation/PersonalInformation.css'
import { ChangeFoto } from "../shared/iconsDushboard/ChangeFotoIcon"
import { CustomContext } from "../../HomePage/Shared/Context/Context"
import { useContext, useRef } from 'react'
import { Navigation } from '../shared/navigation/Navigation'
// import { Contacts } from '../src/Dushboard/Contacts/Contacts';
// // import { PersonalInformation } from './Dushboard/PersonalInformation/PersonalInformation';
// import { LessonsSettings } from './Dushboard/LessonsSettings/LessonsSettings';
// import { TheAddressOfTheLesson } from './Dushboard/TheAddressOfTheLesson/TheAddressOfTheLesson';

export const PersonalInformation = () => {
    const { writeMoreInformation, email, isImageOrPdfURL, isImageURL, firstNameAndLastName, moreInformation, handleImportImage, handlerUploadFilePdfOrJpeg } = useContext(CustomContext)
    const navigate = useNavigate()
    const ref = useRef()
    return (
        <>
            {/* <div>
                <Route path='/contacts_dushboard' element={<Contacts />} />
                <Route path='/personal_information' element={<PersonalInformation />} />
                <Route path='/lessons_settings' element={<LessonsSettings />} />
                <Route path='lesson_address' element={<TheAddressOfTheLesson />} />
            </div> */}
            <div className="wrapper_banner_wrapper">
                <div className="container">
                    <div className="wrapper_inside_history_back">
                        <a className="Home_page" href="../index.html">Ana səhifə</a>
                        <p className="teachers1">/</p>
                        <a className="Home_page" href="../Teachers/teachers.html">Müəllimlər</a>
                        <p className="teachers">/</p>
                        <p className="teachers">{firstNameAndLastName}</p>
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
                    <div class="wrapper_for_profil">
                        <div class="information_about_person">
                            <div class="wrapper_edit">
                                <div class="edit_profile">
                                    <img value={isImageURL} src={isImageURL ? isImageURL : 'no foto'} />
                                    <form for="" class="edit_personal_profile">
                                        <div class="person_name">{firstNameAndLastName}</div>
                                        <button type="button" class="change_wrapper">
                                            <label className="change_foto_label" style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                                                <ChangeFoto />
                                                <span className="change_foto" style={{ width: "78px" }}>Şəkili dəyiş</span>
                                                <input style={{ opacity: "0" }} type="file" onChange={handleImportImage} />
                                            </label>
                                        </button>
                                    </form>
                                </div>
                                {/* <form action="">
                                    <button class="go_premium">Premiuma keç</button>
                                </form> */}
                            </div>
                            <form>
                                <div class="personal_information">
                                    <div class="person_information">
                                        <div class="change_person_information">Şəxsi məlumatlar</div>
                                    </div>

                                    <div action="" class="write_first_and_last_name">
                                        <div class="wrapper_for_input">
                                            <label for="" id="writeName" class="write_name use_multiple_elements">Ad, Soyad</label>
                                            <input value={firstNameAndLastName}  type="text" id="writeName" class="writeName change_multiple_elements" placeholder="Ad, Soyad" />
                                        </div>
                                        <div class="wrapper_for_input">
                                            <label for="" id="writeEmail" class="write_email use_multiple_elements">E-poçt</label>
                                            <input value={email} type="text" id="writeEmail" class="writeEmail change_multiple_elements" placeholder="E-poçt ünvanızı daxil edin" />
                                        </div>
                                        <div class="wrapper_for_input">
                                            <label for="" id="moreInformation" class="more_information use_multiple_elements">Ətraflı</label>
                                            <textarea value={moreInformation} onChange={writeMoreInformation} name="" id="moreInformation" class="moreInformation" cols="30" rows="10"></textarea>
                                        </div>
                                        <div class="wrapper_for_input">
                                            <label for="" id="uploadFile" class="upload_file use_multiple_elements">Sertifikatlar</label>
                                            <div class="btn_uploadCertificates">
                                                <button type="button" class="uploadFile">
                                                    <img src="../icon/File upload.svg" alt="" />
                                                    <label>
                                                        <span>Fayl yüklə (PDF,JPEG)</span>
                                                        <input type="file" style={{ opacity: "0" }} onChange={handlerUploadFilePdfOrJpeg} />
                                                    </label>
                                                </button>
                                                <div class="certificates">

                                                    <div class="certificate">
                                                        <img style={{ width: "52px", height: "60px" }} value={isImageOrPdfURL} src={isImageOrPdfURL ? isImageOrPdfURL : 'no foto'} />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="wrapper_click_btn_next">
                                    <div class="container">
                                        <div for="" class="btn_next">
                                            <button type="submit" onClick={() => navigate('/lessons_settings')} class="btnNext">Növbəti</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}