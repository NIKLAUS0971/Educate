import axios from 'axios';
import React from 'react'
import { createContext } from "react"
import { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';


export const CustomContext = createContext();
export const navigate = Navigate





export const Context = (props) => {
    const [dataList, setDataList] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    const [selectedPrice, setSelectedPrice] = React.useState([10, 1500]);
    const [sortValue, setSortValue] = useState(false)
    const [params, setParams] = useState({})
    const [basket, setBasket] = useState([])

    // Logicals and useStates for pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(6)

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = dataList.slice(firstPostIndex, lastPostIndex);


    async function fetchData() {
        try {
            setLoading(true)
            await axios.get('http://localhost:3005/data?')
                .then(({ data }) => {
                    const response = data.flatMap((item) => {
                        return item.data
                    })
                    setDataList(response)
                    setLoading(false)
                })


        } catch (e) {
            setLoading(true)
            alert('error')
            setLoading(false)
        }
    }


    const addBasket = (card) => {
        setBasket(prev => [...prev, card])

    }
    // useState for sort
    const options = ["Reytinqə görə sırala", "A-z"]
    const [item, setSelectItem] = useState("Reytinqə görə sırala")
    const [isActive, setIsActive] = useState(false)

    const rotate = {
        transform: isActive ? 'rotate(180deg)' : '',
        transition: 'transform 200ms ease',
    }





    // Just fetch anly all data
    async function fetchData() {
        try {
            setLoading(true)
            await axios.get('http://localhost:3005/data?')
                .then(({ data }) => {
                    setDataList(data)
                    setLoading(false)
                })


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
            .then(({ data }) => {
                    setDataList(data)
                    setSearch('')
                    
            })
    }



    // Functions for sorting
    const handleSortForRating = () => {
        dataList.sort((a, b) => b.rating - a.rating);
        setSortValue(dataList)
    }
    const handleSortForAlfavit = () => {
        dataList.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
        setSortValue(dataList)
    }



    // Fetch data inside functions for handleFirstAvailableSpace and handleSecondAvailableSpace
    const handleFirstAvailableSpace = async (value) => {
        return await axios.get(`http://localhost:3005/data`)
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
    const handleSecondAvailableSpace = async (value) => {
        return await axios.get(`http://localhost:3005/data`)
            .then(({ data }) => {
                if (params.minPrice && params.maxPrice) {
                    data = data.filter(val => val.everyPerson == value && val.price >= params.minPrice && val.price <= params.maxPrice)
                } else {
                    data = data.filter(val => val.everyPerson == value);
                }
                setDataList(data)
            })

    }



    // Fetch data inside function for handleRangePriceSlider selectPrice

    const handleRangePriceSlider = async () => {
        return await axios.get(`http://localhost:3005/data`)
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

    const [value1, setValue1] = useState(false)

    const handleChooseSubject = async () => {
        return await axios.get(`http://localhost:3005/data`)
            .then(({ data }) => {
                data = data.filter((item, index) => {
                    if (item.category === 'Dizayn') {
                        return setValue1()
                    } else if (item.category === 'Dillər') {
                        return item.category
                    } else if (item.category === 'IT') {
                        return item.category
                    }
                })

                setDataList(data)


            })
    }

    const value = {
        selectedPrice,
        setSelectedPrice,
        basket,
        setBasket,
        dataList,
        setDataList,
        loading,
        setLoading,
        search,
        setSearch,
        selectedPrice,
        setSortValue,
        params,
        setParams,
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
        addBasket,
        handleSearch,
        options,

    }

    useEffect(() => {
        if (localStorage.getItem('basket') === null) {
            setBasket(JSON.parse(localStorage.getItem('basket')))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket])

    return (
        <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>
    )
}