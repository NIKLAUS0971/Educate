import { SelectPage } from '../Components/TeachersFilterAll/SelectPage/SelectPage'
import { data } from '../Shared/BazaData/BazaData'
import { useState } from 'react'
import { CollapseFilter } from '../Components/TeachersFilterAll/Filter/Collapse/CollapseFilter'
import { IData2 } from '../Modul/Modul'
import { AllCard } from '../Components/TeachersFilterAll/AllCards/AllCard'
import { EmptiFile } from '../Components/EmptiFile/EmptiFile'
import { BlackSearch } from '../Shared/icons/BlackSearch'
import { useEffect } from "react";
import * as React from 'react';

import '../Shared/Style/TeachersFilter.css'
import { SortingArrow } from '../Shared/icons/SortingArrow'
import { SortDown } from '../Shared/icons/SortDown'



export function TeachersFilter() {

    let arrDataList: IData2[] = [];
    let DataList: IData2[] = data.flatMap((elem: any) => {
        return elem.data;
    });

    const [search, setSearch] = useState("")
    const [list, setList] = useState(DataList);
    const [sortRating, setSortRating] = useState(false)
    const [selectedPrice, setSelectedPrice] = React.useState<number[]>([100, 500]);

    const clickIt = (e: any) => {
        e.preventDefault()
        arrDataList = DataList.filter(
            data => data.title.toLowerCase().includes(e.target.search.value.toLowerCase()) ||
                data.profetion.toLowerCase().includes(e.target.search.value.toLowerCase()))
    }



    const applyFilters = () => {
        let updateList = DataList

        // Search Filter
        if (search) {
            updateList = updateList.filter((item: any) => {
                return search.toLowerCase() === ''
                    ? item :
                    item.title.toLowerCase().includes(search.toLowerCase()) ||
                    item.profetion.toLowerCase().includes(search.toLowerCase());
            });
        }

        // Price Filter
        const minPrice = selectedPrice[0]
        const maxPrice = selectedPrice[1]

        updateList = updateList.filter((item: any) => item.price >= minPrice && item.price <= maxPrice);


        //Rating Filter
        if (sortRating) {
            updateList = updateList.sort((a, b) => b.rating - a.rating)
        }



        setList(updateList)
    }


    useEffect(() => {
        applyFilters()
    }, [selectedPrice, search, sortRating])

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
                            ({list ? (list.length) : null} müəllim)
                            </div>
                        </div>
                        <form className="wrapper_for_search_filter" onSubmit={(e) => clickIt(e)}>
                            <label >
                                <input name="search" value={search} type="text" id="search" className="input_search" placeholder="Axtar" onChange={(e) => setSearch(e.target.value)} />
                            </label>

                            <button type="submit" className="inputSearch">
                                <BlackSearch />
                            </button>
                            <div className="tabs">
                                <div className="tabs_head">
                                    <button className="tab1 tabs_toggle is-active">Hamısı</button>
                                    <button className="tab2 tabs_toggle">Yer olan</button>
                                </div>
                                <button type="button" onClick={() => setSortRating(!sortRating)} className="button_for_dropdown">
                                    <SortingArrow />
                                    <p className="raiting_for_dropdown">Reytinqə görə sırala</p>
                                    <SortDown />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="all_cart_and_filter">
                        <ul className="first_item" >
                            <CollapseFilter
                                list={list}
                                setList={setList}
                                search={search}
                                setSearch={setSearch}
                                selectedPrice={selectedPrice}
                                setSelectedPrice={setSelectedPrice}
                            />
                        </ul>
                        <div className='anly_all_card'>
                            {
                                list.length === 0 ? <EmptiFile /> :
                                    list.map((item: any, index: any) => {

                                    return (
                                        <>
                                            <AllCard data={item} key={index} />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <SelectPage />
        </>
    )
}
