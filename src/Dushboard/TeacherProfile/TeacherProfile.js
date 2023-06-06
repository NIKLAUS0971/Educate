import React, { useContext, useEffect, useState } from 'react'
import Person from '../shared/foto/Person.png'
import Sertificate from '../shared/foto/Sertificate.png'
import '../TheAddressOfTheLesson/StyleDushboard.css'
import { CustomContext } from '../../HomePage/Shared/Context/Context'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export const TeacherProfile = () => {
    const { dataList, fetchData } = useContext(CustomContext)
    const [teacherData, setTeacherData] = useState({})

    const params = useParams()



    useEffect(() => {
        axios(`http://localhost:3005/data/${params.id}`)
            .then(({ data }) => {
                setTeacherData(data);
            })
            .catch((err) => {
                console.log(err);

            })
    }, [])

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="wrapper_banner_wrapper">
                <div className="container">
                    <div className="wrapper_inside_history_back">
                        <a className="Home_page" href="../index.html">Ana səhifə</a>
                        <p className="teachers">/</p>
                        <p className="teachers">Müəllimlər</p>
                    </div>
                </div>
            </div>
            <div className="banner_wrapper_">
                <div className="container">
                    <form className="wrapper_go_back_navigation">
                        <button className="goBack" >
                            {/* <img className="goBack_arrow" src="../icon/Vector1.svg" alt=""> */}
                            <p>Geriyə</p>
                        </button>
                        <div className="wrapper_for_icons_share">
                            <button className="save_icon_btn btn_save_btn">
                                <svg className="icon_btn" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.9998 2.49805C17.5832 2.49799 18.1573 2.64366 18.6701 2.92183C19.1828 3.2 19.618 3.60185 19.936 4.09089C20.254 4.57994 20.4449 5.14068 20.4911 5.7222C20.5374 6.30371 20.4377 6.88758 20.201 7.42077C19.9644 7.95396 19.5983 8.41959 19.136 8.77537C18.6737 9.13114 18.1298 9.36579 17.5538 9.45801C16.9778 9.55023 16.3878 9.4971 15.8376 9.30343C15.2873 9.10977 14.7941 8.78171 14.4028 8.34905L9.84483 10.953C10.0583 11.6344 10.0583 12.3647 9.84483 13.046L14.4018 15.652C14.9812 15.0118 15.7767 14.6082 16.6356 14.5188C17.4944 14.4293 18.356 14.6603 19.0549 15.1674C19.7538 15.6744 20.2407 16.4218 20.4222 17.266C20.6036 18.1102 20.4668 18.9917 20.038 19.7412C19.6091 20.4906 18.9185 21.0552 18.0988 21.3266C17.279 21.5979 16.388 21.5568 15.5967 21.2112C14.8054 20.8655 14.1697 20.2398 13.8116 19.454C13.4536 18.6683 13.3985 17.778 13.6568 16.954L9.09983 14.347C8.62521 14.8719 8.00273 15.2406 7.31441 15.4046C6.62609 15.5687 5.90422 15.5204 5.2439 15.2661C4.58358 15.0118 4.01578 14.5634 3.61531 13.98C3.21484 13.3966 3.00049 12.7056 3.00049 11.998C3.00049 11.2904 3.21484 10.5994 3.61531 10.0161C4.01578 9.4327 4.58358 8.98433 5.2439 8.73003C5.90422 8.47572 6.62609 8.42741 7.31441 8.59147C8.00273 8.75552 8.62521 9.12424 9.09983 9.64905L13.6568 7.04505C13.4929 6.52068 13.4546 5.96509 13.5451 5.42319C13.6356 4.8813 13.8523 4.36829 14.1778 3.92565C14.5032 3.48301 14.9282 3.12314 15.4185 2.87514C15.9087 2.62714 16.4504 2.49796 16.9998 2.49805ZM16.9998 15.998C16.4689 15.998 15.9597 16.209 15.5842 16.5844C15.2088 16.9599 14.9978 17.4691 14.9978 18C14.9978 18.531 15.2088 19.0402 15.5842 19.4157C15.9597 19.7911 16.4689 20.002 16.9998 20.002C17.5308 20.002 18.04 19.7911 18.4155 19.4157C18.7909 19.0402 19.0018 18.531 19.0018 18C19.0018 17.4691 18.7909 16.9599 18.4155 16.5844C18.04 16.209 17.5308 15.998 16.9998 15.998ZM6.50183 9.99805C5.97087 9.99805 5.46165 10.209 5.08621 10.5844C4.71076 10.9599 4.49983 11.4691 4.49983 12C4.49983 12.531 4.71076 13.0402 5.08621 13.4157C5.46165 13.7911 5.97087 14.002 6.50183 14.002C7.0328 14.002 7.54201 13.7911 7.91746 13.4157C8.29291 13.0402 8.50383 12.531 8.50383 12C8.50383 11.4691 8.29291 10.9599 7.91746 10.5844C7.54201 10.209 7.0328 9.99805 6.50183 9.99805ZM16.9998 3.99805C16.4689 3.99805 15.9597 4.20897 15.5842 4.58442C15.2088 4.95987 14.9978 5.46908 14.9978 6.00005C14.9978 6.53101 15.2088 7.04023 15.5842 7.41568C15.9597 7.79112 16.4689 8.00205 16.9998 8.00205C17.5308 8.00205 18.04 7.79112 18.4155 7.41568C18.7909 7.04023 19.0018 6.53101 19.0018 6.00005C19.0018 5.46908 18.7909 4.95987 18.4155 4.58442C18.04 4.20897 17.5308 3.99805 16.9998 3.99805Z" />
                                </svg>
                            </button>
                            <a href="../Favorites/favorites.html" className="save_icon_btn btn_save_btn">
                                <svg className="icon_for_cart icon_btn" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.66999 20.8766C5.55703 20.9521 5.42567 20.9956 5.28993 21.0023C5.15419 21.0089 5.01919 20.9786 4.89934 20.9146C4.7795 20.8505 4.67932 20.755 4.60951 20.6384C4.5397 20.5218 4.50288 20.3885 4.50299 20.2526V6.01455C4.50299 5.21994 4.81824 4.45779 5.37955 3.89535C5.94086 3.33291 6.70238 3.01614 7.49699 3.01455L16.497 2.99805C16.891 2.99726 17.2812 3.07408 17.6455 3.22412C18.0098 3.37415 18.3409 3.59447 18.6201 3.87249C18.8992 4.15051 19.1208 4.48078 19.2723 4.84446C19.4238 5.20813 19.5022 5.59809 19.503 5.99205V20.2511C19.5031 20.387 19.4663 20.5203 19.3965 20.6369C19.3267 20.7535 19.2265 20.849 19.1066 20.9131C18.9868 20.9771 18.8518 21.0075 18.7161 21.0008C18.5803 20.9941 18.4489 20.9506 18.336 20.8751L12.003 16.6451L5.66999 20.8751V20.8766ZM18.003 5.99955L17.9925 5.82255C17.9491 5.45743 17.7731 5.12097 17.498 4.87707C17.2228 4.63317 16.8677 4.49882 16.5 4.49955L7.49999 4.51455C7.10269 4.51535 6.72193 4.67373 6.44127 4.95495C6.16061 5.23617 6.00299 5.61725 6.00299 6.01455V18.8501L11.586 15.1211C11.7094 15.0385 11.8545 14.9944 12.003 14.9944C12.1515 14.9944 12.2966 15.0385 12.42 15.1211L18.003 18.8501V5.99955Z" />
                                </svg>
                            </a>
                        </div>
                    </form>
                    <div className="wrapper_for_teachers">
                        <div className="teacher_name_and_paymant">
                            <div className="teacher_name_and_foto">

                                <img className="foto_teacher1" src={teacherData.photo} alt="" />

                                <div className="teacher_name_and_rating">
                                    <div className="teacher_name">
                                        <p className="teacherName">{teacherData.userId}</p>
                                        <p className="aboutJob">UX/UI Dizayn</p>
                                    </div>
                                    <div className="teacher_rating">
                                        <div className="star_rating">
                                            <p>3.5</p>
                                            {/* <img src="../icon/star.svg" alt=""> */}
                                        </div>
                                        <a href="#" id="ratiIt" className="vote">Qiymətləndirin</a>
                                        {teacherData.chooseTeachingLanguages}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner_wrapper_">
                <div className="container">
                    <div className="wrapper_Space_is_available_for_new_students">
                        <div className="space_for_new_students">Yeni şagirdlər üçün yer mövcuddur.</div>
                    </div>
                    <div className="wrapper_teaching_format">
                        <div className="wrapper_At_the_teachers several_wrapper">
                            <p className="teachers_format_text several_text1">Tədris formatı:</p>
                            <p className="type_teaching several_text2">{teacherData.atTheTeachersAddress ? 'Müəllimin ünvanında' : null}</p>
                            <p className="At_the_teachers_address several_text2">{teacherData.atTheStudentsAddress ? 'Şagirdin ünvanında' : null}</p>
                            <p className="type_teaching several_text2">{teacherData.lessonnsOnlyne ? 'Onlayn' : null}</p>
                        </div>
                        <div className="wrapper_At_the_teachers several_wrapper">
                            {/* <img src="../icon/Group.svg" alt=""> */}
                            <p className="teachers_format_text several_text1">Tədris növü:</p>
                            <p className="type_teaching several_text2">{teacherData.individual ? 'individual' : null} {teacherData.group ? 'Qrup şəklində' : null}</p>
                            <p className="At_the_teachers several_text2"></p>
                        </div>
                        <div className="wrapper_At_the_teachers several_wrapper">
                            {/* <img src="../icon/Metro, grey.svg" alt=""> */}
                            <p className="transport several_text1">Metro:</p>
                            <p className="point_of_appointment several_text2">{teacherData.metro_id}</p>
                        </div>
                        <div className="wrapper_At_the_teachers several_wrapper">
                            {/* <img src="../icon/Location.svg" alt=""> */}
                            <p className="teachers_address  several_text1">Tədrisin keçirildiyi ünvan:</p>
                            <p className="location several_text2">{teacherData.city_id}, {teacherData.region_id}, {teacherData.address_text}</p>
                        </div>
                    </div>
                    <div className="banner_wrapper_">
                        <div className="container">
                            <div className="wrapper_everithing_about_teachers_inside">
                                <div className="wrapper_information_about_teachers">
                                    <div className="wrapper_about_teachers">
                                        <div className="about_teachers_title">Müəllimə haqqında</div>
                                        <div className="about_teachers">{teacherData.description}</div>
                                    </div>
                                </div>
                                <div className="wrapper_for_contacts2">
                                    <div className="contacts">
                                        <p className="text_contacts">Əlaqə vasitələri</p>
                                        <div className="number_email_social_network">
                                            <div className="number_email">
                                                <div className="number several_contact">
                                                    {/* <img src="../icon/Frame 16.svg" alt=""> */}
                                                    <div className="teacher_number">{teacherData.phone}</div>
                                                </div>
                                                <div className="write_email several_contact">
                                                    {/* <img src="../icon/Frame 17.svg" alt=""> */}
                                                    <div className="teacher_email">{teacherData.contact_email}</div>
                                                </div>
                                            </div>
                                            <div className="click_social_network" >
                                                <a href="facebook">
                                                    <svg className="change_icons_color" width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_273_6097)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0C6.26803 0 0 6.26803 0 14C0 21.732 6.26803 28 14 28C21.732 28 28 21.732 28 14C28 6.26803 21.732 0 14 0ZM15.4593 14.6149V22.2317H12.3078V14.6152H10.7333V11.9905H12.3078V10.4146C12.3078 8.2733 13.1968 7 15.7227 7H17.8256V9.62506H16.5111C15.5279 9.62506 15.4628 9.99186 15.4628 10.6765L15.4593 11.9902H17.8404L17.5618 14.6149H15.4593Z" />
                                                        </g>
                                                    </svg>
                                                </a>
                                                <a href="instagram">
                                                    <svg className="change_icons_color" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_273_6099)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0C6.26803 0 0 6.26803 0 14C0 21.732 6.26803 28 14 28C21.732 28 28 21.732 28 14C28 6.26803 21.732 0 14 0ZM10.9219 6.57842C11.7184 6.5422 11.9729 6.53333 14.0007 6.53333H13.9984C16.0268 6.53333 16.2804 6.5422 17.0768 6.57842C17.8718 6.61482 18.4146 6.74071 18.8907 6.92533C19.3822 7.11591 19.7975 7.371 20.2128 7.78633C20.6282 8.20137 20.8833 8.61793 21.0747 9.10904C21.2582 9.58382 21.3842 10.1264 21.4216 10.9213C21.4573 11.7178 21.4667 11.9722 21.4667 14.0001C21.4667 16.0279 21.4573 16.2818 21.4216 17.0782C21.3842 17.8728 21.2582 18.4155 21.0747 18.8905C20.8833 19.3814 20.6282 19.798 20.2128 20.213C19.798 20.6284 19.3821 20.8841 18.8911 21.0748C18.416 21.2595 17.8728 21.3853 17.078 21.4217C16.2815 21.458 16.0278 21.4668 13.9998 21.4668C11.9721 21.4668 11.7178 21.458 10.9213 21.4217C10.1265 21.3853 9.58382 21.2595 9.10875 21.0748C8.61793 20.8841 8.20138 20.6284 7.78651 20.213C7.37129 19.798 7.1162 19.3814 6.92533 18.8903C6.74082 18.4155 6.615 17.873 6.57842 17.0781C6.54238 16.2816 6.53333 16.0279 6.53333 14.0001C6.53333 11.9722 6.54267 11.7176 6.57831 10.9211C6.61407 10.1265 6.74007 9.58382 6.92516 9.10887C7.11649 8.61793 7.37164 8.20137 7.78697 7.78633C8.20202 7.37117 8.61858 7.11602 9.10968 6.92533C9.58446 6.74071 10.127 6.61482 10.9219 6.57842Z" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3309 7.87882C13.4609 7.87864 13.6009 7.8787 13.7518 7.87876L14.0008 7.87882C15.9944 7.87882 16.2307 7.88599 17.0179 7.92175C17.7459 7.95506 18.141 8.07669 18.4042 8.17889C18.7527 8.31422 19.0011 8.47604 19.2623 8.73737C19.5236 8.9987 19.6854 9.24761 19.8211 9.59604C19.9233 9.85895 20.0451 10.254 20.0782 10.982C20.114 11.7692 20.1217 12.0056 20.1217 13.9983C20.1217 15.991 20.114 16.2274 20.0782 17.0146C20.0449 17.7426 19.9233 18.1377 19.8211 18.4006C19.6857 18.749 19.5236 18.9972 19.2623 19.2583C19.001 19.5196 18.7528 19.6815 18.4042 19.8168C18.1414 19.9195 17.7459 20.0408 17.0179 20.074C16.2308 20.1099 15.9944 20.1176 14.0008 20.1176C12.007 20.1176 11.7707 20.1099 10.9835 20.074C10.2555 20.0404 9.86043 19.9188 9.59706 19.8166C9.24863 19.6813 8.99972 19.5195 8.73839 19.2581C8.47706 18.9968 8.3153 18.7485 8.17961 18.3999C8.07741 18.1371 7.95561 17.7419 7.92248 17.0139C7.88672 16.2268 7.87955 15.9904 7.87955 13.9964C7.87955 12.0025 7.88672 11.7673 7.92248 10.9802C7.95579 10.2522 8.07741 9.85708 8.17961 9.59388C8.31495 9.2454 8.47706 8.99655 8.73839 8.73521C8.99972 8.47388 9.24863 8.31206 9.59706 8.17644C9.86026 8.07377 10.2555 7.95244 10.9835 7.91895C11.6723 7.88786 11.9393 7.87853 13.3309 7.87695V7.87882ZM17.9864 9.11864C17.4918 9.11864 17.0904 9.5195 17.0904 10.0143C17.0904 10.509 17.4918 10.9103 17.9864 10.9103C18.4811 10.9103 18.8824 10.509 18.8824 10.0143C18.8824 9.51968 18.4811 9.11835 17.9864 9.11835V9.11864ZM10.1663 14C10.1663 11.8825 11.883 10.1656 14.0006 10.1655C16.1182 10.1655 17.8346 11.8824 17.8346 14C17.8346 16.1176 16.1183 17.8338 14.0008 17.8338C11.8831 17.8338 10.1663 16.1176 10.1663 14Z" />
                                                            <path d="M14.0007 11.5107C15.3752 11.5107 16.4896 12.625 16.4896 13.9997C16.4896 15.3742 15.3752 16.4886 14.0007 16.4886C12.6261 16.4886 11.5118 15.3742 11.5118 13.9997C11.5118 12.625 12.6261 11.5107 14.0007 11.5107Z" />
                                                        </g>
                                                    </svg>
                                                </a>
                                                <a href="linkedin">
                                                    <svg className="change_icons_color" width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_273_6101)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0C6.26803 0 0 6.26803 0 14C0 21.732 6.26803 28 14 28C21.732 28 28 21.732 28 14C28 6.26803 21.732 0 14 0ZM6.72093 11.5954H9.89363V21.1281H6.72093V11.5954ZM10.1026 8.64657C10.082 7.7119 9.41366 7 8.32825 7C7.2429 7 6.53333 7.7119 6.53333 8.64657C6.53333 9.56188 7.22196 10.2943 8.28707 10.2943H8.30737C9.41366 10.2943 10.1026 9.56188 10.1026 8.64657ZM17.6826 11.3716C19.7705 11.3716 21.3356 12.7343 21.3356 15.6623L21.3355 21.1281H18.163V16.0281C18.163 14.7471 17.7038 13.8729 16.5553 13.8729C15.6788 13.8729 15.1567 14.4622 14.9274 15.0314C14.8435 15.2354 14.8229 15.5196 14.8229 15.8045V21.1283H11.6498C11.6498 21.1283 11.6916 12.4902 11.6498 11.5957H14.8229V12.9459C15.244 12.2968 15.9981 11.3716 17.6826 11.3716Z" />
                                                        </g>
                                                    </svg>
                                                </a>
                                                <a href={teacherData.youtube}>
                                                    <svg className="change_icons_color" width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_273_6102)">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0C6.26803 0 0 6.26803 0 14C0 21.732 6.26803 28 14 28C21.732 28 28 21.732 28 14C28 6.26803 21.732 0 14 0ZM19.8343 9.18709C20.4768 9.36343 20.9828 9.88295 21.1546 10.5427C21.4667 11.7384 21.4667 14.2333 21.4667 14.2333C21.4667 14.2333 21.4667 16.7281 21.1546 17.924C20.9828 18.5837 20.4768 19.1032 19.8343 19.2796C18.6698 19.6 14 19.6 14 19.6C14 19.6 9.33018 19.6 8.16567 19.2796C7.52307 19.1032 7.01703 18.5837 6.8453 17.924C6.53333 16.7281 6.53333 14.2333 6.53333 14.2333C6.53333 14.2333 6.53333 11.7384 6.8453 10.5427C7.01703 9.88295 7.52307 9.36343 8.16567 9.18709C9.33018 8.86667 14 8.86667 14 8.86667C14 8.86667 18.6698 8.86667 19.8343 9.18709Z" />
                                                            <path d="M12.6 16.8005V12.1338L16.3333 14.4672L12.6 16.8005Z" />
                                                        </g>
                                                    </svg>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner_wrapper_">
                <div className="container">
                    <div className="sabject_text">
                        Fənnlər
                    </div>
                    <div className="place_of_study">
                        <p className="text_place_of_study">Müəllimin ünvanında</p>
                        <p className="text_place_of_study">Oflayn</p>
                        <p className="text_place_of_study">Şagirdin ünvanında   </p>
                    </div>
                    <div className="table_wrapper">
                        <div className="table">
                            <div className="cell">
                                <span>1. {teacherData.isSubject} {teacherData.isDirection}</span>
                                <div className="location_is_available" >{teacherData.haveSpace}</div>
                            </div>
                            <table className="parentTable">
                                <tr>
                                    <td className="childTable1">Qrup şəklində</td>
                                    <td className='td_for_language' rowSpan='2'>
                                        <span className='wrapper_for_fix_language_'>
                                            <span style={{display:'flex', flexDirection:'column'}}>{teacherData.chooseTeachingLanguages}</span>
                                        </span>
                                    </td>
                                    <td className="childTable">{teacherData.asAGroupAtTheTeachersAddress}</td>
                                    <td className="childTable">{teacherData.asAGroupatTheStudentsAddress}</td>
                                    <td className="childTable">{teacherData.asAGroupOnlyne}</td>
                                </tr>
                                <tr>
                                    <td className="childTable1">İnduvidual</td>
                                    <td className="childTable">{teacherData.atTheTeachersAddress}</td>
                                    <td className="childTable">{teacherData.atTheStudentsAddress}</td>
                                    <td className="childTable">{teacherData.lessonnsOnlyne}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner_wrapper_">
                <div className="container">
                    <div className="certificates_wrapper">
                        <div className="certificates_text">Sertifikatlar</div>
                        <div className="certificates">
                            {teacherData.file}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}