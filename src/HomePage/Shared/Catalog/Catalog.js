import axios from "axios"

import { CustomContext } from "../Context/Context"
import { useState, useEffect, useContext } from 'react'
import { NewInp } from "../../Main/NewInp"
import { AvailableSpace } from "../../Components/TeachersFilterAll/Filter/AvailabelSpace/AvailabelSpace"
import { SortingArrow } from "../icons/SortingArrow"
import { JustDownNewClass } from "../icons/JustDownNewClass"
import { CollapseFilter } from "../../Components/TeachersFilterAll/Filter/Collapse/CollapseFilter"
import { AllCard } from "../../Components/TeachersFilterAll/AllCards/AllCard"
import Pagination from "../Pagination/Pagination"

import { useNavigate, useParams } from "react-router-dom"
import { SliderDataArr } from "../../Components/Slider/SliderDataArr"



export const Catalog = () => {
    const navigate = useNavigate()

    const {
        loading,
        search,
        setSearch,
        selectedPrice,
        item,
        setSelectItem,
        isActive,
        setIsActive,
        rotate,
        fetchData,
        handleChooseSubject,
        options
    } = useContext(CustomContext)

    const { category } = useParams()


    // Logicals and useStates for pagination
    const [dataList, setDataList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(6)
    const [params, setParams] = useState({})
    const [sortValue, setSortValue] = useState(false)
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = dataList.slice(firstPostIndex, lastPostIndex);

    useEffect(() => {
        axios(`http://localhost:3005/data?category=${category}`)
            .then(({ data }) => {
                setDataList(data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    // Fetch data inside function for search input
    const handleSearchForCategory = async (e) => {
        e.preventDefault()
        return await axios.get(`http://localhost:3005/data?q=${search}&category=${category}`)
            .then(({ data }) => {
                setDataList(data)
                setSearch('')
            })
    }


    // Fetch data inside functions for handleFirstAvailableSpace and handleSecondAvailableSpace
    const handleFirstAvailableSpaceForCategory = async (value) => {
        return await axios.get(`http://localhost:3005/data?category=${category}`)
            .then(({ data }) => {
                data.filter(item => item.availableSpace == value)
                if (params.minPrice && params.maxPrice) {
                    data = data.filter(val => val.availableSpace == value && val.price >= params.minPrice && val.price <= params.maxPrice)
                } else {
                    data = data.filter(val => val.availableSpace == value);
                }
                setDataList(data)
            })



    }
    const handleSecondAvailableSpaceForCategory = async (value) => {
        return await axios.get(`http://localhost:3005/data?category=${category}`)
            .then(({ data }) => {
                data.filter(item => item.availableSpace == value)
                if (params.minPrice && params.maxPrice) {
                    data = data.filter(val => val.everyPerson == value && val.price >= params.minPrice && val.price <= params.maxPrice)
                } else {
                    data = data.filter(val => val.everyPerson == value);
                }
                setDataList(data)
            })

    }


    const handleRangePriceSliderForCategory = async () => {
        return await axios.get(`http://localhost:3005/data?category=${category}`)
            .then(({ data }) => {
                const minPrice = selectedPrice[0]
                const maxPrice = selectedPrice[1]
                setParams({
                    minPrice: minPrice,
                    maxPrice: maxPrice
                })
                data = data.filter((item) => item.price >= minPrice && item.price <= maxPrice);
                setDataList(data)

            })

    }

    // Functions for sorting
    const handleSortForRatingForCategory = () => {
        dataList.sort((a, b) => b.rating - a.rating);
        setSortValue(dataList)
    }
    const handleSortForAlfavitForCategory = () => {
        dataList.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
        setSortValue(dataList)
    }
    useEffect(() => {
        fetchData()
    }, [])



    useEffect(() => {
        handleRangePriceSliderForCategory()
    }, [selectedPrice])




    return (
        <>
            <section>
                <div className="banner_banner_wrapper">
                    <div className="container">
                        <div className="wrapper_inside_history_back">
                            <a className="Home_page" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Ana səhifə</a>
                            <p className="className">/</p>
                            <p className="className">Müəllimlər</p>
                        </div>
                    </div>
                </div>
                <div className="banner_wrapper">
                    <div className="container">
                        <div className="wrapper_for_search_filter_all_teachers_wrapper">
                            <div className="all_teachers_wrapper">
                                <div className="all_teachers">{SliderDataArr.find(item => item.name == category).name}</div>
                                <div className="number_of_teachers">
                                    ({dataList ? (dataList.length) : null} )
                                </div>
                            </div>
                            <div className="wrapper_for_search_filter">
                                < NewInp search={search} setSearch={setSearch} handleSearch={handleSearchForCategory} />
                                <div className="tabs">
                                    <AvailableSpace handleFirstAvailableSpace={handleFirstAvailableSpaceForCategory} handleSecondAvailableSpace={handleSecondAvailableSpaceForCategory} />


                                    <div className="drob_down_new_class drob_down_new_class2" style={{ width: '229px', display: 'flex', justifyContent: "center", border: 'none' }}>
                                        <div className=" drob_down_btn_new_class" onClick={(e) => {
                                            setIsActive(!isActive)
                                        }}>
                                            <SortingArrow style={rotate} />
                                            <span className='classHover'>{item}</span>
                                            <JustDownNewClass style={rotate} />
                                        </div>
                                        {
                                            isActive && (
                                                <div className="dropdown-content drob_down_content_new_class" style={{ width: '229px', top: '41px' }}>
                                                    {options.map((option, index) => (
                                                        index === 0 ? <div
                                                            key={index} onClick={(e) => {
                                                                handleSortForRatingForCategory()
                                                                setSelectItem(option)
                                                                setIsActive(false)
                                                            }
                                                            } className="dropdown-item dropdown_item_hover">
                                                            {option}
                                                        </div> : index === 1 && (
                                                            <div
                                                                key={index} onClick={(e) => {
                                                                    handleSortForAlfavitForCategory()
                                                                    setSelectItem(option)
                                                                    setIsActive(false)
                                                                }
                                                                } className="dropdown-item dropdown_item_hover">
                                                                {option}
                                                            </div>
                                                        )
                                                    ))}
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="all_cart_and_filter">
                            <ul className="first_item" >
                                <CollapseFilter handleChooseSubject={handleChooseSubject} />
                            </ul>
                            <AllCard coinsData={currentPosts} loading={loading} />
                        </div>
                        <Pagination totalPosts={dataList.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} />
                    </div>
                </div>
            </section>
        </>
    )
}