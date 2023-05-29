import { useNavigate } from 'react-router-dom'
import '../LessonsSettings/LessonsSettings.css'
import { IconsForDushboard1 } from '../shared/iconsDushboard/IconsForDushboard1';
import { IconsForDushboard2 } from '../shared/iconsDushboard/IconsForDushboard2';
import { IconsForDushboard3 } from '../shared/iconsDushboard/IconsForDushboard3';
import { IconsForDushboard4 } from '../shared/iconsDushboard/IconsForDushboard4';
import { SelectDirectionLesson } from './SelectDirectionLesson';
import { SelectSubjectLesson } from './SelectSubjectLesson';
import { Navigation } from '../shared/navigation/Navigation'

export const LessonsSettings = () => {
    const navigate = useNavigate()
    const lenguage = ["Azərbaycan", "İngilis", "Rus", "Türk"];
    const address = ["Müəllimin ünvanında", "Şagirdin ünvanında", "Onlayn"]
    const teachingFormat = ["İndividual", "Qrup şəklində"]
    const availableSpace = ["Var", "Yoxdur"]

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
                    <Navigation />
                    <form>
                        <div className="About_the_subject_wrapper">
                            <div className="title_About_the_subject">
                                <span>Fənn haqqında</span>
                            </div>
                            <div action="" className="form_inputs">
                                <div className="inputs">
                                    <SelectSubjectLesson />
                                    <SelectDirectionLesson />
                                </div>
                                <div className="wrapper_language_of_instruction parentElement">
                                    <span className="title">Tədris dili</span>
                                    <div className="choose_language_of_instruction child1">
                                        {
                                            lenguage.map(item => {
                                                return (
                                                    <>
                                                        <div className="wrapper_for_checkbox">
                                                            <label for="1" className="language make_a_choice">
                                                                <img className="check_mark" src="../icon/check mark.svg" alt="" />
                                                                <span className="icon_checkBox"></span>
                                                                <input type="checkbox" className="checkbox choose_language" />
                                                                <span className="country_language">{item}</span>
                                                            </label>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="teaching_format parentElement">
                                    <span className="title">Tədris formatı</span>
                                    <div className="wrapper_content">
                                        <div className="choose_teaching_format child2">
                                            <div className="wrapper_for_checkbox">
                                                {
                                                    address.map(item => {
                                                        return (
                                                            <>
                                                                <div className="wrapper_for_checkbox">
                                                                    <label for="6" className="format make_a_choice">
                                                                        <img className="check_mark" src="../icon/check mark.svg" alt="" />
                                                                        <span className="icon_checkBox"></span>
                                                                        <input type="checkbox" className="checkbox choose_format" />
                                                                        <span className="students_address course">{item}</span>
                                                                    </label>
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="wrapper_at_the_teachers_address">
                                            {
                                                address.map(item => {
                                                    return (
                                                        <>
                                                            <div className="wrapper_for_input">
                                                                <label for="" className="at_the_teachers_address use_multiple_elements">
                                                                    <span>{item} (Aylıq)</span>
                                                                    <input type="text" id="teachersAddress" className="teachers_address use_together" placeholder="0 AZN" />
                                                                </label>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="type_of_study parentElement">
                                    <span className="title">Tədris növü</span>
                                    <div className="wrapper_content">
                                        <div className="choose_type_of_study child2">
                                            {
                                                teachingFormat.map(item => {
                                                    return (
                                                        <>
                                                            <div className="wrapper_for_checkbox">
                                                                <label for="" className="lable">
                                                                    <img className="check_mark" src="../icon/check mark.svg" alt="" />
                                                                    <span className="icon_checkBox"></span>
                                                                    <input type="checkbox" className="checkbox choose_Individual" />
                                                                    <span className=" make_a_choice">{item}</span>
                                                                </label>
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="wrapper_at_the_teachers_address">
                                            {
                                                teachingFormat.map(item => {
                                                    return (
                                                        <>
                                                            <div className="wrapper_for_input">
                                                                <label for="" className="at_the_teachers_address use_multiple_elements">{item} (Aylıq)</label>
                                                                <input type="text" id="teachersAddress" className="individual use_together" placeholder="0 AZN" />
                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="available_space parentElement">
                                    <span className="title">Mövcud yer</span>
                                    <div className="choose_available_space child1">
                                        {
                                            availableSpace.map(item => {
                                                return (
                                                    <>
                                                        <div className="wrapper_for_checkbox">
                                                            <label className="label radio_label">
                                                                <input type="radio" id="chooseIndividual" className="radio_input radio choose_Individual" name="1" />
                                                                <span className="fake"></span>
                                                                <span className="text">{item}</span>
                                                            </label>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="wrapper_click_btn_next">
                            <div class="container">
                                <div for="" class="btn_next">
                                    <button type="submit" onClick={() => navigate('/lesson_address')} class="btnNext">Növbəti</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}