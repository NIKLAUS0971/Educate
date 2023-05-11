import * as React from 'react';
import axios from 'axios'
import Pagination from '../Shared/Pagination/Pagination';

import { useEffect, useState } from "react";
import { CollapseFilter } from '../Components/TeachersFilterAll/Filter/Collapse/CollapseFilter'
import { AllCard } from '../Components/TeachersFilterAll/AllCards/AllCard'
import { SortingArrow } from '../Shared/icons/SortingArrow'
import { AvailableSpace } from '../Components/TeachersFilterAll/Filter/AvailabelSpace/AvailabelSpace'
import { JustDownNewClass } from '../Shared/icons/JustDownNewClass';
import { NewInp } from './NewInp';
import { useContext } from "react"
import { CustomContext } from '../Shared/Context/Context';

import '../Shared/Style/TeachersFilter.css'



export function TeachersFilter() {

    const { 
        value1,
        selectedPrice,
        dataList,
        loading,
        search,
        setSearch,
        setCurrentPage,
        postPerPage,
        currentPosts,
        item,
        setSelectItem,
        isActive,
        setIsActive,
        rotate,
        fetchData,
        handleSearch,
        handleSortForRating,
        handleSortForAlfavit,
        handleFirstAvailableSpace,
        handleSecondAvailableSpace,
        handleRangePriceSlider,
        handleChooseSubject,
        options
    } = useContext(CustomContext)
    

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
                           < NewInp search={search} setSearch={setSearch} handleSearch={handleSearch}/>
                            <div className="tabs">
                                <AvailableSpace handleFirstAvailableSpace={handleFirstAvailableSpace} handleSecondAvailableSpace={handleSecondAvailableSpace} />


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
                                                            handleSortForRating()
                                                            setSelectItem(option)
                                                            setIsActive(false)
                                                        }
                                                        } className="dropdown-item dropdown_item_hover">
                                                        {option}
                                                    </div> : index === 1 && (
                                                        <div
                                                            key={index} onClick={(e) => {
                                                                handleSortForAlfavit()
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
                            <CollapseFilter handleChooseSubject={handleChooseSubject} value1={value1}/>
                        </ul>
                        <AllCard coinsData={currentPosts} loading={loading} />
                    </div>
                    <Pagination totalPosts={dataList.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} />
                </div>
            </div>
        </>
    )
}
    