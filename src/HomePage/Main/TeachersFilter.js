import * as React from 'react';
import { useEffect, useState } from "react";
import { CollapseFilter } from '../Components/TeachersFilterAll/Filter/Collapse/CollapseFilter'
import { AllCard } from '../Components/TeachersFilterAll/AllCards/AllCard'
import { EmptiFile } from '../Components/EmptiFile/EmptiFile'
import { BlackSearch } from '../Shared/icons/BlackSearch'
import { SortingArrow } from '../Shared/icons/SortingArrow'
import { SortDown } from '../Shared/icons/SortDown'
import { AvailableSpace } from '../Components/TeachersFilterAll/Filter/AvailabelSpace/AvailabelSpace'
import '../Shared/Style/TeachersFilter.css'
import Pagination from '../Shared/Pagination/Pagination';
import axios from 'axios'
import { JustDown } from '../Shared/icons/JustDown';
import { JustDownNewClass } from '../Shared/icons/JustDownNewClass';

export function TeachersFilter() {

    const [dataList, setDataList] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    const [selectedPrice, setSelectedPrice] = React.useState([10, 1500]);
    const [sortValue, setSortValue] = useState(false)



    // useState for sort

    const options = ["Reytinqə görə sırala", "A-z"]
    const [item, setSelectItem] = useState("Reytinqə görə sırala")
    const [isActive, setIsActive] = useState(false)

    const rotate ={
        transform: isActive ? 'rotate(180deg)' : '',
        transition: 'transform 200ms ease',
    }

    // Logicals and useStates for pagination

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(6)

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = dataList.slice(firstPostIndex, lastPostIndex);



    // Just fetch anly all data

    async function fetchData() {
        try {
            setLoading(true)
            const response = await axios.get('http://localhost:3005/data?')
            const newResponse = response.data.flatMap((item) => {
                return item.data
            })
            setDataList(newResponse)
            setLoading(false)
        } catch (e) {
            setLoading(true)
            alert('error')
            setLoading(false)
        }
    }



    // Fetch data inside function for search input 

    const handleSearch = async (e) => {
        e.preventDefault()
        return await axios.get(`http://localhost:3005/data?q=${search}`)
            .then((response) => {
                const newResponse2 = response.data.flatMap((item) => {
                    return item.data
                })
                setDataList(newResponse2)
                setSearch('')
            })
    }

    const handleSort = () => {
        dataList.sort((a, b) => b.rating - a.rating);
        setSortValue(dataList)
    }



    // Fetch data inside functions for handleFirstAvailableSpace and handleSecondAvailableSpace

    const handleFirstAvailableSpace = async (value) => {
        return await axios.get(`http://localhost:3005/data`)
            .then((response) => {

                const newResponse2 = response.data.flatMap((item) => {

                    item.data = item.data.filter(val => val.availableSpace == value)
                    console.log(item.data);
                    return item.data
                })
                setDataList(newResponse2)

            })
    }
    const handleSecondAvailableSpace = async () => {
        return await axios.get(`http://localhost:3005/data`)
            .then((response) => {

                const newResponse2 = response.data.flatMap((item) => {
                    return item.data
                })
                setDataList(newResponse2)

            })

    }



    // Fetch data inside function for handleRangePriceSlider selectPrice

    const handleRangePriceSlider = async () => {
        return await axios.get(`http://localhost:3005/data`)
            .then((response) => {
                const minPrice = selectedPrice[0]
                const maxPrice = selectedPrice[1]

                const newResponse2 = response.data.flatMap((item) => {
                    return item.data.filter((item) => item.price >= minPrice && item.price <= maxPrice);
                })
                setDataList(newResponse2)

            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        handleRangePriceSlider()
    }, [selectedPrice])




    return (
        <>
            <div className="banner_banner_wrapper">
                <div className="container">
                    <div className="wrapper_inside_history_back">
                        <a className="Home_page" href="../index.html">Ana səhifə</a>
                        <p className="className">/</p>
                        <p className="className">Müəllimlər</p>
                    </div>
                </div>
            </div>
            <div className="banner_wrapper">
                <div className="container">
                    <div className="wrapper_for_search_filter_all_teachers_wrapper">
                        <div className="all_teachers_wrapper">
                            <div className="all_teachers">Müəllimlər</div>
                            <div className="number_of_teachers">
                                ({dataList ? (dataList.length) : null} müəllim)
                            </div>
                        </div>
                        <div className="wrapper_for_search_filter">
                            <form style={{ display: 'flex', alignItems: 'center' }} onSubmit={handleSearch} >
                                <input name="search"
                                    value={search} type="text"
                                    id="search"
                                    className="input_search"
                                    placeholder="Axtar"
                                    onChange={(e) => setSearch(e.target.value)} />
                                <button type="submit" className="inputSearch">
                                    <BlackSearch />
                                </button>
                            </form>
                            <div className="tabs">
                                <AvailableSpace handleFirstAvailableSpace={handleFirstAvailableSpace} handleSecondAvailableSpace={handleSecondAvailableSpace} />


                                <div className="drob_down_new_class" style={{ width: '229px', display: 'flex', justifyContent: "center", border: 'none' }}>
                                    <div className=" drob_down_btn_new_class" style={{ width: '100%' }} onClick={(e) => {
                                        setIsActive(!isActive)
                                    }}>
                                        <SortingArrow />
                                        <span>{item}</span>
                                        <JustDownNewClass style={rotate}/>
                                        <div>
                                            {/* <JustDown /> */}
                                        </div>
                                    </div>
                                    {
                                        isActive && (
                                            <div className="dropdown-content drob_down_content_new_class" style={{ width: '229px', top: '41px' }}>
                                                {options.map((option, index) => (
                                                    <div
                                                        key={index} onClick={(e) => {
                                                            handleSort()
                                                            setSelectItem(option)
                                                            setIsActive(false)
                                                        }
                                                        } className="dropdown-item dropdown_item_hover">
                                                        {option}
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    }
                                </div>
                                {/* <button className="button_for_dropdown" onClick={handleSort}>
                                    <SortingArrow />
                                    <p className="raiting_for_dropdown">Reytinqə görə</p>
                                    <SortDown />
                                </button> */}
                            </div>
                        </div>
                    </div>
                    <div className="all_cart_and_filter">
                        <ul className="first_item" >
                            <CollapseFilter
                                list={dataList}
                                setList={setDataList}
                                selectedPrice={selectedPrice}
                                setSelectedPrice={setSelectedPrice}
                            />
                        </ul>
                        <AllCard coinsData={currentPosts} loading={loading} />
                    </div>
                    <Pagination totalPosts={dataList.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} />
                </div>
            </div>
        </>
    )
}




