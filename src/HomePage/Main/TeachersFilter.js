import { SelectPage } from '../Components/TeachersFilterAll/SelectPage/SelectPage'
import { CollapseFilter } from '../Components/TeachersFilterAll/Filter/Collapse/CollapseFilter'
import { AllCard } from '../Components/TeachersFilterAll/AllCards/AllCard'
import { EmptiFile } from '../Components/EmptiFile/EmptiFile'
import { BlackSearch } from '../Shared/icons/BlackSearch'
import { SortingArrow } from '../Shared/icons/SortingArrow'
import { SortDown } from '../Shared/icons/SortDown'
import { useLogicalAtions } from '../Shared/LogicalActions/LogicalActions'
import * as React from 'react';

import '../Shared/Style/TeachersFilter.css'



export function TeachersFilter() {
    const { loading, list, sortRating, selectedPrice, search, setSearch, setSortRating, setSelectedPrice, setList } = useLogicalAtions()

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
                        <form className="wrapper_for_search_filter" >
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
                            {loading ? <h1>Loading...</h1> : list.length === 0 ? <EmptiFile /> : list.map((item, index) => {
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
