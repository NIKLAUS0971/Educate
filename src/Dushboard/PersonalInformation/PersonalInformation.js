import { useNavigate } from "react-router-dom"
import Rectangly111 from '../../HomePage/Shared/foto/Rectangly111.png'
import '../PersonalInformation/PersonalInformation.css'
import { ChangeFoto } from "../shared/iconsDushboard/ChangeFotoIcon"
import { CustomContext } from "../../HomePage/Shared/Context/Context"
import { useContext, useRef } from 'react'

export const PersonalInformation = () => {
    const { writeMoreInformation, handleWriteFirstNameAndLastName,isImageOrPdfURL, isImageURL, firstNameAndLastName, moreInformation, handleImportImage, handlerUploadFilePdfOrJpeg } = useContext(CustomContext)
    const navigate = useNavigate()
    const ref = useRef()
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
                    <nav className="inforemation_about_contact_address">
                        <a style={{ borderBottom: "1px solid #DBE4EC", cursor: "pointer" }} type='button' className="personal information">
                            <svg className="icons_svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2159_15805)">
                                    <path d="M8.62878 0.108705C7.56791 0.300009 6.57661 0.839139 5.83313 1.6261C4.08095 3.47827 3.96791 6.33479 5.56791 8.32175C7.65487 10.9174 11.6462 10.8304 13.6375 8.14349C14.3766 7.14783 14.7375 5.85218 14.607 4.65218C14.4766 3.4174 13.9896 2.39131 13.1288 1.52175C12.407 0.791313 11.4375 0.282618 10.4418 0.108705C9.99834 0.0304441 9.05052 0.0304441 8.62878 0.108705Z" />
                                    <path d="M14.8952 10.2613C14.717 10.3178 14.4865 10.557 14.4344 10.7396C14.4126 10.8222 14.3909 11.1091 14.3909 11.3787V11.8613L14.0996 11.957C13.9344 12.0135 13.6909 12.1135 13.5518 12.1874L13.2996 12.3178L12.9213 11.9483C12.4865 11.5178 12.4083 11.47 12.1518 11.47C11.7561 11.47 11.4691 11.757 11.4691 12.1526C11.4691 12.4091 11.517 12.4874 11.9474 12.9222L12.317 13.3004L12.1865 13.5526C12.1126 13.6918 12.0126 13.9352 11.9561 14.0961L11.8605 14.3918H11.3778C11.1083 14.3918 10.8213 14.4135 10.73 14.4352C10.517 14.4961 10.2778 14.7657 10.2387 14.9961C10.1996 15.2265 10.3474 15.5439 10.5605 15.6831C10.6952 15.7744 10.7605 15.7831 11.2865 15.7831H11.8648L11.9344 16.0352C11.9735 16.17 12.0778 16.4265 12.1605 16.6004L12.317 16.9178L11.9213 17.3178C11.4952 17.7483 11.417 17.9091 11.4822 18.2135C11.5691 18.6309 12.0561 18.8613 12.4518 18.6744C12.5257 18.6396 12.7518 18.4439 12.9474 18.2483L13.3083 17.8874L13.6257 18.0483C13.7996 18.1352 14.0431 18.2309 14.1648 18.2657L14.3909 18.3222V18.8483C14.3909 19.3048 14.4039 19.3961 14.4909 19.5657C14.6691 19.9265 15.0561 20.057 15.417 19.8874C15.7083 19.7483 15.7561 19.6178 15.7822 18.9439L15.8039 18.3396L16.117 18.2396C16.2909 18.1874 16.5344 18.0831 16.6648 18.0091L16.8996 17.8787L17.2648 18.2483C17.4648 18.4526 17.6909 18.6439 17.7691 18.6787C18.3474 18.9265 18.9257 18.3483 18.6778 17.77C18.6431 17.6918 18.4518 17.4657 18.2474 17.2657L17.8778 16.9004L18.0083 16.6657C18.0822 16.5352 18.1865 16.2918 18.2387 16.1178L18.3387 15.8048L18.9431 15.7831C19.617 15.757 19.7474 15.7091 19.8865 15.4178C20.0561 15.057 19.9257 14.67 19.5648 14.4874C19.3952 14.4048 19.3039 14.3918 18.8474 14.3918H18.3213L18.2648 14.1657C18.23 14.0439 18.1344 13.8004 18.0474 13.6265L17.8865 13.3091L18.2474 12.9483C18.4431 12.7526 18.6387 12.5265 18.6735 12.4526C18.8605 12.057 18.63 11.57 18.2126 11.4831C17.9083 11.4178 17.7474 11.4961 17.317 11.9222L16.917 12.3178L16.5996 12.1613C16.4257 12.0787 16.1691 11.9744 16.0344 11.9352L15.7822 11.8657V11.2874C15.7822 10.7613 15.7735 10.6961 15.6822 10.5613C15.5822 10.4048 15.2605 10.2135 15.1083 10.2222C15.0605 10.2222 14.9648 10.2439 14.8952 10.2613ZM15.8822 13.357C16.1648 13.4918 16.5996 13.8831 16.7561 14.1483C17.0474 14.6483 17.0822 15.357 16.8387 15.8831C16.6474 16.2874 16.3257 16.6178 15.9213 16.8135C15.6431 16.9526 15.5518 16.9744 15.2213 16.9918C14.5822 17.0222 14.1648 16.857 13.73 16.4004C13.3387 15.9918 13.2083 15.6526 13.2083 15.0787C13.2126 14.2787 13.6474 13.6483 14.4213 13.3222C14.6474 13.2265 14.7257 13.2178 15.1518 13.2265C15.5605 13.2396 15.6648 13.257 15.8822 13.357Z" />
                                    <path d="M7.95576 11.0918C6.15576 11.2483 4.44706 11.6961 3.06445 12.37C2.34706 12.7222 1.7775 13.1005 1.31228 13.5396C0.716627 14.1048 0.381844 14.6005 0.168801 15.2396C0.068801 15.5309 0.0644531 15.6005 0.0644531 16.7179V17.8918L0.181844 18.1396C0.329671 18.457 0.607931 18.7352 0.938366 18.8961L1.19489 19.0222L6.03402 19.0352L10.8731 19.0439L10.7645 18.8831C10.6036 18.6396 10.5036 18.2092 10.5384 17.8918C10.5688 17.5918 10.7514 17.1874 10.9688 16.9352L11.121 16.7613L10.7775 16.7135C10.1601 16.6222 9.69054 16.2874 9.44271 15.7483C9.34706 15.5396 9.32532 15.4396 9.32532 15.1092C9.32532 14.7613 9.33837 14.6874 9.46011 14.4352C9.72532 13.8787 10.2384 13.5266 10.8514 13.4874L11.1731 13.4657L10.9601 13.2352C10.4731 12.7048 10.3949 11.9396 10.7558 11.3352L10.8992 11.0961L10.7688 11.07C10.5818 11.0309 8.44271 11.0483 7.95576 11.0918Z" />
                                </g>
                            </svg>
                            <p className="studies_information">Şəxsi məlumatlar</p>
                        </a>
                        <a style={{ borderBottom: "1px solid #DBE4EC", cursor: "pointer" }} className="teaching information">
                            <svg className="icons_svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2159_15815)">
                                    <path d="M7.64468 0.0131903C7.51557 0.0484033 7.35515 0.18143 7.28864 0.30272C7.23386 0.416184 6.6235 3.35843 6.60785 3.60492C6.58829 3.87489 6.60785 3.9414 6.76044 4.10573L6.91695 4.27005L9.96092 4.28179C12.9227 4.28962 13.0088 4.28962 13.1301 4.21528C13.2905 4.11355 13.3805 3.97661 13.4001 3.79272C13.4274 3.57362 12.7819 0.396621 12.6841 0.267507C12.641 0.212731 12.5589 0.130567 12.5002 0.0875292C12.3945 0.00536537 12.3515 0.00536537 10.0587 0.00145245C8.77541 -0.00246 7.68772 0.00145245 7.64468 0.0131903Z" />
                                    <path d="M4.31155 2.53333C3.63076 2.6468 3.00867 3.1163 2.71522 3.73057C2.49221 4.20791 2.50003 3.83621 2.50003 11.2583C2.50003 17.9449 2.50003 18.0936 2.57828 18.3909C2.6761 18.7861 2.84825 19.0795 3.14169 19.3769C3.43905 19.6703 3.73249 19.8425 4.12766 19.9403C4.4211 20.0146 4.56978 20.0186 9.97302 20.0186C13.733 20.0186 15.5875 20.0068 15.748 19.9755C16.4522 19.8503 17.1134 19.283 17.3795 18.5905L17.4656 18.3557L17.4773 11.3327C17.4851 5.00216 17.4812 4.29007 17.4225 4.09836C17.2191 3.39018 16.6987 2.84634 15.9984 2.60376C15.7871 2.53333 15.6345 2.51377 15.0711 2.49812C14.6955 2.49029 14.3942 2.49421 14.3942 2.51377C14.3942 2.53333 14.4372 2.76809 14.492 3.03805C14.6055 3.6132 14.6094 3.77361 14.5272 4.13357C14.4294 4.57569 14.0538 5.06084 13.6626 5.26038C13.2596 5.46775 13.3261 5.46384 9.98867 5.46384C7.05816 5.46384 6.87427 5.45993 6.65126 5.3895C6.0096 5.18996 5.53227 4.63438 5.43836 3.97707C5.40315 3.7071 5.42271 3.47626 5.544 2.89329C5.58704 2.69375 5.61052 2.52159 5.59878 2.50986C5.56748 2.47856 4.53456 2.49421 4.31155 2.53333ZM10.9551 6.96235C11.1311 7.07972 11.2446 7.3536 11.2055 7.56097C11.1624 7.79572 10.9316 7.99526 10.6695 8.02656C10.556 8.0383 9.47612 8.04613 8.27106 8.0383C6.15045 8.02656 6.07611 8.02265 5.94308 7.94831C5.66529 7.78399 5.57139 7.41229 5.73963 7.13841C5.90787 6.86453 5.81397 6.87236 8.45103 6.87236H10.822L10.9551 6.96235ZM6.49084 10.0728C6.97209 10.3115 6.87427 11.0627 6.3539 11.1605C6.1661 11.1957 5.99395 11.1449 5.84136 11.0118C5.34446 10.5736 5.89222 9.77156 6.49084 10.0728ZM14.0264 10.065C14.2338 10.1628 14.3355 10.335 14.3355 10.5893C14.3355 10.7497 14.312 10.8358 14.2494 10.9258C14.0656 11.184 14.136 11.1762 11.5693 11.1762C8.98314 11.1762 9.07313 11.184 8.88924 10.9062C8.70144 10.6284 8.81099 10.2215 9.11226 10.0728C9.23746 10.0063 9.437 10.0024 11.5693 10.0024C13.6313 10.0024 13.9091 10.0102 14.0264 10.065ZM6.55344 13.2537C6.79211 13.3985 6.87819 13.7741 6.7256 14.0245C6.62387 14.1928 6.42824 14.3062 6.24435 14.3062C5.58313 14.3062 5.42271 13.4102 6.0409 13.1911C6.22088 13.1285 6.37738 13.1481 6.55344 13.2537ZM14.0695 13.2342C14.4372 13.5081 14.4451 13.9776 14.0851 14.2162L13.9521 14.3062H11.5811C9.28441 14.3062 9.20616 14.3023 9.08096 14.228C8.64275 13.9619 8.72883 13.3242 9.22572 13.1677C9.2805 13.152 10.3682 13.1403 11.6437 13.1442C13.9247 13.152 13.9599 13.152 14.0695 13.2342ZM6.52214 16.3799C7.01904 16.6811 6.81167 17.448 6.23653 17.448C5.78267 17.448 5.50488 16.9511 5.73963 16.5677C5.90005 16.3134 6.26391 16.2234 6.52214 16.3799ZM14.0851 16.3916C14.4451 16.6303 14.4372 17.0998 14.0695 17.3737C13.9599 17.4558 13.9325 17.4558 11.585 17.4558H9.21007L9.06922 17.3658C8.70535 17.1428 8.71318 16.6029 9.08096 16.3799C9.20616 16.3055 9.28441 16.3016 11.5811 16.3016H13.9521L14.0851 16.3916Z" />
                                </g>
                            </svg>
                            <p className="studies_information">Tədris məlumatları</p>
                        </a>
                        <a style={{ borderBottom: "1px solid #DBE4EC", cursor: "pointer" }} className="className_address information">
                            <svg className="icons_svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 1.05539C9.1002 1.03005 8.20458 1.18645 7.36735 1.51509C6.53013 1.84374 5.7687 2.33782 5.12917 2.96741C4.48963 3.597 3.98529 4.34902 3.64666 5.17794C3.30803 6.00687 3.14215 6.89547 3.15907 7.78996C3.15907 13.4295 9.49594 18.6469 9.76237 18.8616C9.82759 18.917 9.91058 18.9475 9.9964 18.9475C10.0822 18.9475 10.1652 18.917 10.2304 18.8616C10.5113 18.6111 16.8409 12.8713 16.8409 7.78996C16.8579 6.89547 16.692 6.00687 16.3534 5.17794C16.0147 4.34902 15.5104 3.597 14.8708 2.96741C14.2313 2.33782 13.4699 1.84374 12.6327 1.51509C11.7954 1.18645 10.8998 1.03005 10 1.05539ZM10 11.0749C9.35911 11.0749 8.7326 10.8861 8.19971 10.5322C7.66682 10.1783 7.25149 9.67531 7.00623 9.08683C6.76097 8.49835 6.69679 7.8508 6.82183 7.22607C6.94686 6.60134 7.25548 6.02749 7.70867 5.57708C8.16185 5.12668 8.73924 4.81995 9.36783 4.69568C9.99641 4.57141 10.648 4.63519 11.2401 4.87895C11.8322 5.12271 12.3383 5.5355 12.6943 6.06512C13.0504 6.59474 13.2404 7.2174 13.2404 7.85437C13.2404 8.70852 12.899 9.52768 12.2913 10.1317C11.6836 10.7356 10.8594 11.0749 10 11.0749Z" />
                            </svg>
                            <p className="studies_information">Dərsin ünvanı</p>
                        </a>
                        <a style={{ cursor: "pointer" }} className="contacts_info_contacts information">
                            <svg className="icons_svg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2159_15831)">
                                    <path d="M9.59627 12.3004C7.87772 10.8902 6.73022 9.15009 6.12695 8.15997L5.67695 7.31339C5.83429 7.14492 7.03417 5.86276 7.55414 5.16709C8.20758 4.29353 7.26019 3.50458 7.26019 3.50458C7.26019 3.50458 4.59443 0.84401 3.9869 0.316255C3.37937 -0.212238 2.68002 0.0812874 2.68002 0.0812874C1.40313 0.904599 0.0794147 1.6204 2.68061e-06 5.0629C-0.00295907 8.28596 2.44882 11.6102 5.10014 14.1838C7.75573 17.0902 11.4018 20.0033 14.9269 20C18.3762 19.9215 19.0933 18.6007 19.9184 17.3265C19.9184 17.3265 20.2127 16.6292 19.6836 16.0224C19.1542 15.4157 16.4877 12.755 16.4877 12.755C16.4877 12.755 15.6977 11.8094 14.8221 12.462C14.1696 12.9487 12.9979 14.0314 12.7156 14.2939C12.7161 14.2948 10.756 13.2521 9.59627 12.3004Z" />
                                </g>
                            </svg>
                            <p className="studies_information">Əlaqə vasitələri</p>
                        </a>
                    </nav>
                    <div class="wrapper_for_profil">
                        <div class="information_about_person">
                            <div class="wrapper_edit">
                                <div class="edit_profile">
                                    <img value={isImageURL} src={isImageURL ? isImageURL : 'no foto'} />
                                    <form for="" class="edit_personal_profile">
                                        <div class="person_name">Adilə Vahubova</div>
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
                                            <input value={firstNameAndLastName} onChange={handleWriteFirstNameAndLastName} type="text" id="writeName" class="writeName change_multiple_elements" placeholder="Ad, Soyad" />
                                        </div>
                                        <div class="wrapper_for_input">
                                            <label for="" id="writeEmail" class="write_email use_multiple_elements">E-poçt</label>
                                            <input type="text" id="writeEmail" class="writeEmail change_multiple_elements" placeholder="E-poçt ünvanızı daxil edin" />
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
                                                        <img style={{width:"52px", height:"60px"}} value={isImageOrPdfURL} src={isImageOrPdfURL ? isImageOrPdfURL : 'no foto'} />
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