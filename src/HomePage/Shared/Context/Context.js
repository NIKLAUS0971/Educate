import { Subject } from '@mui/icons-material';
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
    const [item, setSelectItem] = useState("Sırala")
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
    const [dataList2, setDataList2] = useState()
    const [itemCategory, setItemCategory] = useState([])
    const [itemSelectSubway, setItemSelectSubway] = useState([])


    async function fetchData2() {
        console.log(dataList2);
                try {
                    setLoading(true)
                    await axios.get(`http://localhost:3005/data?_vdfvdf=${dataList2}`)
                } catch (e) {
                    setLoading(true)
                    alert('error')
                    setLoading(false)
                }
            }
        
            useEffect(() => {
                fetchData2()
            }, [dataList2])

  

    const HandleSelectDistrict = (district) => {

        setDataList2(itemSelectDistrict=> {
            return{
                ...itemSelectDistrict,
                district
            }
        })

    }

    const HandleSelectSity = (sity) => {
        setDataList2(itemSelectSity=> {
            return{
                ...itemSelectSity,
                sity
            }
        })
    }

    const HandleSelectSubway = (subway) => {
        const temp = [...itemSelectSubway]
        const index = temp.indexOf(subway)
        if(index === -1){
            temp.push(subway)
        }else{
            temp.splice(index, 1)
        }

        setItemSelectSubway(temp)
        setDataList2(itemSelectSubway => {
            return{
                ...itemSelectSubway,
                temp
            }
        })
    }
    const HandleCategory = (allCategory) => {
        const category = [...itemCategory];
        const index = category.indexOf(allCategory);

        if (index === -1) {

            category.push(allCategory)
        } else {
            category.splice(index, 1)
        }

        setItemCategory(category)
        setDataList2(setItemCategory=>{
            return{
                ...setItemCategory,
                category
            }
        })


    }

    const HandleSelectTeachingFormat = (teachingFormat) => {
        setDataList2(itemSelectTeachingFormat => {
            return{
                ...itemSelectTeachingFormat, 
                teachingFormat}
        })
    }
    const HandleSelectTypeOfStudy = (typeOfStudy) => {
        setDataList2(itemSelectTypeOfStudy => {
            return{
                ...itemSelectTypeOfStudy, 
                typeOfStudy
            }
        })
    }
    
    const HandleSelectGenderOfTheTeacher = (genderOfTheTeacher) => {
        setDataList2(itemSelectGenderOfTheTeacher => {
            return{
                ...itemSelectGenderOfTheTeacher, 
                genderOfTheTeacher
            }
        })
    }
    const HandleSelectDirection = (allDirection) => {
        const direction = [...itemCategory];
        const index = direction.indexOf(allDirection);

        if (index === -1) {

            direction.push(allDirection)
        } else {
            direction.splice(index, 1)
        }

        setItemCategory(direction)
        setDataList(selectItemDirection=>{
            return{
                ...selectItemDirection,
                direction
            }
        })
    }
    

    const value = {
        HandleSelectDirection,
        HandleSelectGenderOfTheTeacher,
        HandleSelectTypeOfStudy,
        HandleSelectTeachingFormat,
        HandleSelectSubway,
        HandleSelectSity,
        HandleSelectDistrict,
        HandleCategory,
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