import { useNavigate } from "react-router-dom"
import Rectangly111 from '../../HomePage/Shared/foto/Rectangly111.png'
import '../PersonalInformation/PersonalInformation.css'
import { ChangeFoto } from "../shared/iconsDushboard/ChangeFotoIcon"
import { CustomContext } from "../../HomePage/Shared/Context/Context"
import { useContext, useEffect, useRef, useState } from 'react'
import { Navigation } from '../shared/navigation/Navigation'
import { DropZoneComponents } from "../DropZoneComponents/DropZoneComponents"


export const PersonalInformation = () => {
    const {
        writeMoreInformation,
        handleWritwEmail,
        email,
        // isImageOrPdfURL,
        isImageURL,
        firstNameAndLastName,
        moreInformation,
        handleWriteFirstNameAndLastName,
        handleImportImage,
        file, setFile, file1
        // handlerUploadFilePdfOrJpeg,

    } = useContext(CustomContext)
    
        

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
                                    <img value={isImageURL[0]} src={isImageURL ? isImageURL : ''} />
                                    <form for="" class="edit_personal_profile">
                                        <div class="person_name">{firstNameAndLastName}</div>
                                        <button type="button" class="change_wrapper">
                                            <label className="change_foto_label" style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                                                <ChangeFoto />
                                                <span className="change_foto" style={{ width: "79px" }}>{isImageURL ? 'Şəkili dəyiş' : 'Şəkili yüklə'}</span>
                                                <input multiple style={{ opacity: "0", width: "0" }} type="file" onChange={handleImportImage} />
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
                                            <input value={firstNameAndLastName} onChange={handleWriteFirstNameAndLastName} type="text" id="writeName" class="writeName change_multiple_elements" placeholder="Ad, Soyad" />
                                        </div>
                                        <div class="wrapper_for_input">
                                            <label for="" id="writeEmail" class="write_email use_multiple_elements">E-poçt</label>
                                            <input value={email} onChange={handleWritwEmail} type="text" id="writeEmail" class="writeEmail change_multiple_elements" placeholder="E-poçt ünvanızı daxil edin" />
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
                                                    <label style={{ cursor: "pointer", width: "100%", height: "44px", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                                                        <span>Fayl yüklə (PDF,JPEG)</span>
                                                        < DropZoneComponents file={file} setFile={setFile} />
                                                    </label>
                                                </button>
                                                <div class="certificates">
                                                    <div class="certificate" >
                                                        <ul className="dropzone_image" >
                                                        {file1[0]}
                                                        </ul>
                                                    </div>
                                                    <div class="certificate" >
                                                        <ul className="dropzone_image" >
                                                        {file1[1]}
                                                        </ul>
                                                    </div>
                                                    <div class="certificate" >
                                                        <ul className="dropzone_image" >
                                                        {file1[2]}
                                                        </ul>
                                                    </div>
                                                    <div class="certificate" >
                                                        <ul className="dropzone_image" >
                                                        {file1[3]}
                                                        </ul>
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