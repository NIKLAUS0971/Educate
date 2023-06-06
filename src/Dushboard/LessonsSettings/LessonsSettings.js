import { useNavigate } from 'react-router-dom'
import '../LessonsSettings/LessonsSettings.css'
import { IconsForDushboard1 } from '../shared/iconsDushboard/IconsForDushboard1';
import { IconsForDushboard2 } from '../shared/iconsDushboard/IconsForDushboard2';
import { IconsForDushboard3 } from '../shared/iconsDushboard/IconsForDushboard3';
import { IconsForDushboard4 } from '../shared/iconsDushboard/IconsForDushboard4';
import { SelectDirectionLesson } from './SelectDirectionLesson';
import { SelectSubjectLesson } from './SelectSubjectLesson';
import { Navigation } from '../shared/navigation/Navigation'
import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { CustomContext } from '../../HomePage/Shared/Context/Context';

export const LessonsSettings = () => {
    const navigate = useNavigate()
    const {
        SelectTeachingFormat,
        selectIndividualTeachingFormat,
        HandleSelaectAsAGroup,
        handleSelaectAsAGroup,
        HandleAtTheTeachersAddress,
        atTheTeachersAddress,
        atTheStudentsAddress,
        HandleAtTheStudentsAddress,
        lessonnsOnlyne,
        HandlelessonnsOnlyne,
        asAGroupAtTheTeachersAddress,
        handleSelaectAsAGroupAtTheTeachersAddress,
        handleChooseTeachingLanguages,
        asAGroupatTheStudentsAddress,
        handleSelaectAsAGroupAtTheStudentsAddress,
        asAGroupOnlyne,
        handleSelaectAsAGroupOnlyne,
        handleAvailableSpaceHere,
        createnewPersonCard
    } = useContext(CustomContext)

    const [addSettings, setAddSettings] = useState([{}])
    const [isOpen, setIsOpen] = useState(true)


    const lenguage = [
        { id: 1, name: 'Azərbaycan' },
        { id: 2, name: 'Türk' },
        { id: 3, name: 'İngilis' },
        { id: 4, name: 'Rus' }
    ]
    const availableSpace = [
        { id: 1, name: "Yer mövcuddur" },
        { id: 2, name: "Yer mövcud deyil" }
    ]

    const handleAddNewExpand = (e) => {
        e.preventDefault()
        const addNewExpand = [...addSettings]
        addNewExpand.push({
            id: uuidv4(),
        })
        setAddSettings(addNewExpand)
        localStorage.setItem('newLessonsSettingsExpand', JSON.stringify(addNewExpand))
    }


    useEffect(() => {
        if (localStorage.getItem('newLessonsSettingsExpand') !== null) {
            setAddSettings(JSON.parse(localStorage.getItem('newLessonsSettingsExpand')))
        }
    }, [])

    console.log(isOpen);
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
                    <form className='add_new_expand' onSubmit={createnewPersonCard}>
                        {
                            addSettings.map((item) => {
                                return (
                                    <div className="About_the_subject_wrapper" key={item.id}>
                                        <div onClick={(e) => setIsOpen(!isOpen)} className="title_About_the_subject">
                                            <span>Fənn haqqında</span>
                                        </div>

                                        {
                                            isOpen && (<>
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
                                                                                    <input value={item.id} onChange={(e) => handleChooseTeachingLanguages(item.name)} type="checkbox" className="checkbox choose_language" />
                                                                                    <span className="country_language">{item.name}</span>
                                                                                </label>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="teaching_format parentElement" >
                                                        <span className="title">Tədris növü</span>
                                                        <div style={{ background: "#FBFCFD", borderRadius: "5px" }}>
                                                            <div className="wrapper_content">
                                                                <div className="choose_teaching_format child2">
                                                                    <div className="wrapper_for_checkbox">

                                                                        <div className="wrapper_for_checkbox">
                                                                            <label for="6" className="format make_a_choice">
                                                                                <img className="check_mark" src="../icon/check mark.svg" alt="" />
                                                                                <span className="icon_checkBox"></span>
                                                                                <input onChange={SelectTeachingFormat} name='address' type="checkbox" className="checkbox choose_format" />
                                                                                <span className="students_address course">İndividual</span>
                                                                            </label>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className="wrapper_at_the_teachers_address">

                                                                    <div className="wrapper_for_input">

                                                                        <div >
                                                                            {
                                                                                selectIndividualTeachingFormat ?
                                                                                    <>
                                                                                        <div className='fixed_input_space'>
                                                                                            <label for="" className="at_the_teachers_address use_multiple_elements">
                                                                                                <span>Müəllimin ünvanında</span>
                                                                                                <input value={atTheTeachersAddress} onChange={HandleAtTheTeachersAddress} type="text" className="teachers_address use_together" placeholder="0 AZN" />
                                                                                            </label>
                                                                                            <labe className="at_the_teachers_address use_multiple_elements">
                                                                                                <span>Şagirdin ünvanında</span>
                                                                                                <input value={atTheStudentsAddress} onChange={HandleAtTheStudentsAddress} type="text" className="teachers_address use_together" placeholder="0 AZN" />
                                                                                            </labe>
                                                                                            <labe className="at_the_teachers_address use_multiple_elements">
                                                                                                <span>Onlayn</span>
                                                                                                <input value={lessonnsOnlyne} onChange={HandlelessonnsOnlyne} type="text" className="teachers_address use_together" placeholder="0 AZN" />
                                                                                            </labe>
                                                                                        </div>
                                                                                    </> :
                                                                                    <>
                                                                                        <div className='fixed_input_space'>
                                                                                            <label className="at_the_teachers_address use_multiple_elements">
                                                                                                <span>Müəllimin ünvanında</span>
                                                                                                <input disabled style={{ background: "rgb(248, 247, 247)" }} type="text" id="teachersAddress" className="teachers_address use_together" placeholder="0 AZN" />
                                                                                            </label>
                                                                                            <label className="at_the_teachers_address use_multiple_elements">
                                                                                                <span>Şagirdin ünvanında</span>
                                                                                                <input disabled style={{ background: "rgb(248, 247, 247)" }} type="text" id="teachersAddress" className="teachers_address use_together" placeholder="0 AZN" />
                                                                                            </label>
                                                                                            <label className="at_the_teachers_address use_multiple_elements">
                                                                                                <span>Onlayn</span>
                                                                                                <input disabled style={{ background: "rgb(248, 247, 247)" }} type="text" id="teachersAddress" className="teachers_address use_together" placeholder="0 AZN" />
                                                                                            </label>
                                                                                        </div>
                                                                                    </>
                                                                            }
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="wrapper_content">
                                                                <div className="choose_type_of_study child2">
                                                                    <div className="wrapper_for_checkbox">
                                                                        <label for="" className="lable">
                                                                            <img className="check_mark" src="../icon/check mark.svg" alt="" />
                                                                            <span className="icon_checkBox"></span>
                                                                            <input onChange={HandleSelaectAsAGroup} type="checkbox" className="checkbox choose_Individual" />
                                                                            <span className=" make_a_choice">Qrup şəklində</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="wrapper_at_the_teachers_address">
                                                                    <div className="wrapper_for_input">
                                                                        {
                                                                            handleSelaectAsAGroup ?
                                                                                <div className='fixed_input_space'>
                                                                                    <label for="" className="at_the_teachers_address use_multiple_elements">
                                                                                        <span>Müəllimin ünvanında</span>
                                                                                        <input value={asAGroupAtTheTeachersAddress} onChange={handleSelaectAsAGroupAtTheTeachersAddress} type="text" id="teachersAddress" className="teachers_address use_together" placeholder="0 AZN" />
                                                                                    </label>
                                                                                    <label for="" className="at_the_teachers_address use_multiple_elements">
                                                                                        <span>Şagirdin ünvanında</span>
                                                                                        <input value={asAGroupatTheStudentsAddress} onChange={handleSelaectAsAGroupAtTheStudentsAddress} type="text" id="teachersAddress" className="teachers_address use_together" placeholder="0 AZN" />
                                                                                    </label>
                                                                                    <label for="" className="at_the_teachers_address use_multiple_elements">
                                                                                        <span>Onlayn</span>
                                                                                        <input value={asAGroupOnlyne} onChange={handleSelaectAsAGroupOnlyne} type="text" id="teachersAddress" className="teachers_address use_together" placeholder="0 AZN" />
                                                                                    </label>
                                                                                </div>
                                                                                :
                                                                                <div className='fixed_input_space'>
                                                                                    <label for="" className="at_the_teachers_address use_multiple_elements">
                                                                                        <span>Müəllimin ünvanında</span>
                                                                                        <input disabled style={{ background: "rgb(248, 247, 247)" }} type="text" id="teachersAddress" className="teachers_address use_together" placeholder="0 AZN" />
                                                                                    </label>
                                                                                    <label for="" className="at_the_teachers_address use_multiple_elements">
                                                                                        <span>Şagirdin ünvanında</span>
                                                                                        <input disabled style={{ background: "rgb(248, 247, 247)" }} type="text" id="teachersAddress" className="teachers_address use_together" placeholder="0 AZN" />
                                                                                    </label>
                                                                                    <label for="" className="at_the_teachers_address use_multiple_elements">
                                                                                        <span>Onlayn</span>
                                                                                        <input disabled style={{ background: "rgb(248, 247, 247)" }} type="text" id="teachersAddress" className="teachers_address use_together" placeholder="0 AZN" />
                                                                                    </label>
                                                                                </div>
                                                                        }
                                                                    </div>
                                                                </div>
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
                                                                                    <input type="radio" value={item.id} onChange={(e) => handleAvailableSpaceHere(item.name)} id="chooseIndividual" className="radio_input radio choose_Individual" name="1" />
                                                                                    <span className="fake"></span>
                                                                                    <span className="text">{item.name}</span>
                                                                                </label>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </>)
                                        }
                                    </div>
                                )
                            })
                        }
                        <div class="wrapper_click_btn_next">
                            <div class="container">
                                <div for="" class="btn_next">
                                    <button type="submit" onClick={handleAddNewExpand} className='create_new_subject_'>Yeni fənn əlavə et</button>
                                    <button type="submit" class="btnNext">Növbəti</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
        </>
    )
}