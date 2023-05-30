import { Subject } from '@mui/icons-material';
import { Pagination } from 'antd';
import axios from 'axios';
import React from 'react'
import { createContext } from "react"
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';


export const CustomContext = createContext();





export const Context = (props) => {
    const [dataList, setDataList] = useState([])




    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    const [selectedPrice, setSelectedPrice] = React.useState([30, 1430]);
    const [sortValue, setSortValue] = useState(false)
    const [params, setParams] = useState({})
    const [basket, setBasket] = useState([])

    // Logicals and useStates for pagination

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(8)
    const [numberOfPages, setNumberOfPages] = useState(4)
    const [minPageLimit, setMinPageLimit] = useState(0)
    const [maxPageLimit, setMaxPageLimit] = useState(2)

    // useState for sort
    const options = ["Reytinqə görə sırala", "A-z"]
    const [item, setSelectItem] = useState("Sırala")
    const [isActive, setIsActive] = useState(false)
    const [dataList2, setDataList2] = useState()
    const [itemCategory, setItemCategory] = useState([])
    const [itemSelectSubway, setItemSelectSubway] = useState([])
   

    const rotate = {
        transform: isActive ? 'rotate(180deg)' : '',
        transition: 'transform 200ms ease',
    }

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = dataList.slice(firstPostIndex, lastPostIndex);


    const addBasket = (card) => {
        const temp = [...basket]
        const index = temp.indexOf(card)
        if (index === -1) {
            temp.push(card)
        } else {
            temp.splice(index, 1)
        }
        setBasket(temp)
        localStorage.setItem('favorites', JSON.stringify(temp))

    }

    function prePage() {
        if (currentPage !== firstPostIndex) {
            setCurrentPage(currentPage - 1)

        }
    }
    function nextPage() {
        if (currentPage !== firstPostIndex) {
            setCurrentPage(currentPage + 1)
            if (currentPage + 1 > maxPageLimit) {
                return null
            }
        }
    }





    // Just fetch anly all data
    async function fetchData() {
        try {
            setLoading(true)
            await axios.get(`http://localhost:3005/data?${currentPage}`)
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
    // const handleSearch = async (e) => {
    //     e.preventDefault()
    //     return await axios.get(`http://localhost:3005/data?q=${search}`)
    //         .then(({ data }) => {
    //             setDataList(data)
    //             setSearch('')

    //         })
    // }

    const handleSearch = async (e) => {
        e.preventDefault()
        // console.log(e.target.value);
        await axios.get(`http://localhost:3005/data?q=${search}`)
            .then(({ data }) => {
                setDataList(data)
                setSearch('')
                setSearch(localStorage.setItem('searchResult', JSON.stringify(data)))
                console.log(data);
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






    async function fetchData2() {
        // console.log(dataList2);
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
    }, [])

console.log(dataList2);

    const HandleSelectDistrict = (district) => {

        setDataList2(itemSelectDistrict => {
            return {
                ...itemSelectDistrict,
                district
            }
        })

    }

    const HandleSelectSity = (sity) => {
        setDataList2(itemSelectSity => {
            return {
                ...itemSelectSity,
                sity
            }
        })
    }

    const HandleSelectSubway = (subway) => {
        const temp = [...itemSelectSubway]
        const index = temp.indexOf(subway)
        if (index === -1) {
            temp.push(subway)
        } else {
            temp.splice(index, 1)
        }

        setItemSelectSubway(temp)
        setDataList2(itemSelectSubway => {
            return {
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
        setDataList2(setItemCategory => {
            return {
                ...setItemCategory,
                category
            }
        })


    }

    const HandleSelectTeachingFormat = (teachingFormat) => {
        setDataList2(itemSelectTeachingFormat => {
            return {
                ...itemSelectTeachingFormat,
                teachingFormat
            }
        })
    }
    const HandleSelectTypeOfStudy = (typeOfStudy) => {
        setDataList2(itemSelectTypeOfStudy => {
            return {
                ...itemSelectTypeOfStudy,
                typeOfStudy
            }
        })
    }

    // Fetch data inside function for handleRangePriceSlider selectPrice

    const handleRangePriceSlider = () => {
        const minPrice = selectedPrice[0]
        const maxPrice = selectedPrice[1]
        setDataList2(price => {

            return {
                ...price,
                minPrice,
                maxPrice
            }
        })

    }

    const HandleSelectGenderOfTheTeacher = (genderOfTheTeacher) => {
        setDataList2(itemSelectGenderOfTheTeacher => {
            return {
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
        setDataList(selectItemDirection => {
            return {
                ...selectItemDirection,
                direction
            }
        })
    }


    //Dushboard


    const [district, setDistrict] = useState('')
    const [sity, setSity] = useState('')
    const [subway, setSubway] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [firstNameAndLastName, setFirstNameAndLastName] = useState('')
    const [moreInformation, setMoreInformation] = useState('')
    const [isFacebook, setFacebook] = useState('')
    const [isIsnstagram, setInstagram] = useState('')
    const [isLinkedin, setLinkedin] = useState('')
    const [isYoutube, setYoutube] = useState('')
    const [isImage, setIsImage] = useState()
    const [isImageURL, setIsImageURL] = useState()
    const [isImageOrPdfURL, setIsImageOrPdfURL] = useState()

   

    

    const fileReader = new FileReader();
    const secondFileReader = new FileReader();

    fileReader.onloadend = () => {
        setIsImageURL(fileReader.result);
    }
    secondFileReader.onloadend = () => {
        setIsImageOrPdfURL(secondFileReader.result)
    }


    const handleSelectDistrict = (district) => {
        setDistrict(district)
    }
    const handleSelectSity = (sity) => {
        setSity(sity)
    }
    const handleSelectSubway = (subway) => {
        setSubway(subway)
    }
    const handleWriteExactAddress = (e) => {
        setAddress(e.target.value)
    }
    const handleSetTheAddressOnTheMap = (e) => {
        setAddress(e.target.value)
    }
    const handleWritwPhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }
    const handleWritwEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleWriteFirstNameAndLastName = (e) => {
        setFirstNameAndLastName(e.target.value)
    }
    const writeMoreInformation = (e) => {
        setMoreInformation(e.target.value)
    }

    const handleWriteFacebook = (e) => {
        setFacebook(e.target.value)
    }
    const handleWriteInstagram = (e) => {
        setInstagram(e.target.value)
    }
    const handleWriteLinkedin = (e) => {
        setLinkedin(e.target.value)
    }
    const handleWriteYoutube = (e) => {
        setYoutube(e.target.value)
    }
    const handleImportImage = (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        setIsImage(file)
        fileReader.readAsDataURL(file)
    }
    const handlerUploadFilePdfOrJpeg = (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        setIsImageOrPdfURL(file)
        secondFileReader.readAsDataURL(file)
    }





    
    const addNewPerson = (newPerson) => {
        axios.post(`http://localhost:3005/data?`, newPerson)
            .then((response) => {
                // console.log(response);
            })
    }

    const createnewPersonCard = (e) => {
        e.preventDefault();
        const newPerson = {
            description: moreInformation,
            photo: isImageURL,
            rating: '',
            gender: "",
            map_point: '',
            address_text: address,
            phone: phoneNumber,
            contact_email: email,
            facebook: isFacebook,
            youtube: isYoutube,
            linkedin: isLinkedin,
            instagram: isIsnstagram,
            city_id: sity,
            region_id: district,
            metro_id: subway,
            userId: firstNameAndLastName,
            profetion: '',
            price: '',
            category: "",
            availableSpace: "true",
            everyPerson: "everyBody"
        }

        addNewPerson(newPerson)
    }


    const [user, setUser] = useState({

    })

    useEffect(()=>{
        if(localStorage.getItem('user') !== null){
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, [])

    const value = {
        //dushboard
        email, setEmail,
        user, setUser,
        address,
        isImageOrPdfURL,
        handlerUploadFilePdfOrJpeg,
        isImageURL,
        handleImportImage,
        isImage,
        handleWriteFacebook,
        handleWriteInstagram,
        isFacebook,
        isIsnstagram,
        isLinkedin,
        isYoutube,
        handleWriteLinkedin,
        handleWriteYoutube,
        writeMoreInformation,
        moreInformation,
        handleWriteFirstNameAndLastName,
        firstNameAndLastName,
        handleWritwPhoneNumber,
        phoneNumber,
        handleWritwEmail,
        createnewPersonCard,
        handleSelectDistrict,
        handleSelectSity,
        handleSelectSubway,
        handleWriteExactAddress,
        handleSetTheAddressOnTheMap,
        //////////////
        handleRangePriceSlider,
        numberOfPages, setNumberOfPages,
        minPageLimit, setMinPageLimit,
        maxPageLimit, setMaxPageLimit,
        nextPage,
        prePage,
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
        currentPage,
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