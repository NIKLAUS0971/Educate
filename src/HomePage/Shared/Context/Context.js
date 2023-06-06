import { Subject } from '@mui/icons-material';
import { Pagination } from 'antd';
import axios from 'axios';
import React, { useRef } from 'react'
import { createContext } from "react"
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Image } from "antd"

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
    useEffect(() => {
        if (localStorage.getItem('favorites') !== null) {
            setBasket(JSON.parse(localStorage.getItem('favorites')))
        }
    }, [])

    useEffect(() => {
        if (localStorage.getItem('basket') !== null) {
            setBasket(JSON.parse(localStorage.getItem('basket')))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket])



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
        await axios.get(`http://localhost:3005/data?q=${search}`)
            .then(({ data }) => {
                setDataList(data)
                setSearch('')
                setSearch(localStorage.setItem('searchResult', JSON.stringify(data)))

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
    console.log(dataList2);

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

    const [sity, setSity] = useState(() => {
        const saved = localStorage.getItem('sity');
        const initiolValue = JSON.parse(saved)
        return initiolValue || 'Şəhər seçin'
    })

    useEffect(() => {
        localStorage.setItem('sity', JSON.stringify(sity))
    }, [sity])


    const [subway, setSubway] = useState('')





    const [selectIndividualTeachingFormat, setSelectIndividualTeachingFormat] = useState(false)

    const SelectTeachingFormat = () => {
        setSelectIndividualTeachingFormat(!selectIndividualTeachingFormat)
    }

    const [handleSelaectAsAGroup, setHandleSelaectAsAGroup] = useState(false)

    const HandleSelaectAsAGroup = () => {
        setHandleSelaectAsAGroup(!handleSelaectAsAGroup)
    }
    const [atTheTeachersAddress, setAtTheTeachersAddress] = useState('')

    const HandleAtTheTeachersAddress = (e) => {
        setAtTheTeachersAddress(e.target.value)
    }

    const [atTheStudentsAddress, setAtTheStudentsAddress] = useState('')

    const HandleAtTheStudentsAddress = (e) => {
        setAtTheStudentsAddress(e.target.value)
    }



    const [lessonnsOnlyne, setLessonnsOnlyne] = useState('')

    const HandlelessonnsOnlyne = (e) => {
        setLessonnsOnlyne(e.target.value)
    }
    console.log(lessonnsOnlyne, 'kkk');


    const [chooseTeachingLanguages, setChooseTeachingLanguages] = useState([])

    const handleChooseTeachingLanguages = (language) => {
        const temp = [...chooseTeachingLanguages];
        const index = temp.indexOf(language);
        if (index === -1) {
            temp.push(language)
        } else {
            temp.splice(index, 1)
        }
        setChooseTeachingLanguages(temp)
    }

    const [asAGroupAtTheTeachersAddress, setAsAGroupAtTheTeachersAddress] = useState('')



    const handleSelaectAsAGroupAtTheTeachersAddress = (e) => {
        setAsAGroupAtTheTeachersAddress(e.target.value)
    }

    const [asAGroupatTheStudentsAddress, setAsAGroupatTheStudentsAddress] = useState('')

    const handleSelaectAsAGroupAtTheStudentsAddress = (e) => {
        setAsAGroupatTheStudentsAddress(e.target.value)
    }

    const [asAGroupOnlyne, setAsAGroupOnlyne] = useState('')

    const handleSelaectAsAGroupOnlyne = (e) => {
        setAsAGroupOnlyne(e.target.value)
    }

    const [haveSpace, setHaveSpace] = useState([])

    const handleAvailableSpaceHere = (space) => {
        setHaveSpace([space])
    }

    console.log(haveSpace);





    const [isYourEmail, setIsYourEmail] = useState(() => {
        const saved = localStorage.getItem('isYourEmail');
        const initiolValue = JSON.parse(saved)
        return initiolValue || ''
    })

    useEffect(() => {
        localStorage.setItem('isYourEmail', JSON.stringify(isYourEmail))
    }, [isYourEmail])

    const [address, setAddress] = useState(() => {
        const saved = localStorage.getItem('address');
        const initiolValue = JSON.parse(saved)
        return initiolValue || ''
    })

    useEffect(() => {
        localStorage.setItem('address', JSON.stringify(address))
    }, [address])

    const [onTheMapAddress, setOnTheMapAddress] = useState(() => {
        const saved = localStorage.getItem('onTheMapAddress');
        const initiolValue = JSON.parse(saved)
        return initiolValue || ''
    })

    useEffect(() => {
        localStorage.setItem('onTheMapAddress', JSON.stringify(onTheMapAddress))
    }, [onTheMapAddress])

    const [phoneNumber, setPhoneNumber] = useState(() => {
        const saved = localStorage.getItem('phoneNumber');
        const initiolValue = JSON.parse(saved)
        return initiolValue || ''
    })

    useEffect(() => {
        localStorage.setItem('phoneNumber', JSON.stringify(phoneNumber))
    }, [phoneNumber])

    const [email, setEmail] = useState(() => {
        const saved = localStorage.getItem('email');
        const initiolValue = JSON.parse(saved)
        return initiolValue || ''
    })

    useEffect(() => {
        localStorage.setItem('email', JSON.stringify(email))
    }, [email])

    const [firstNameAndLastName, setFirstNameAndLastName] = useState(() => {
        const saved = localStorage.getItem('firstName_LastName');
        const initiolValue = JSON.parse(saved)
        return initiolValue || ''
    })

    useEffect(() => {
        localStorage.setItem('firstName_LastName', JSON.stringify(firstNameAndLastName))
    }, [firstNameAndLastName])

    const [moreInformation, setMoreInformation] = useState(() => {
        const saved = localStorage.getItem('more_Information');
        const initiolValue = JSON.parse(saved)
        return initiolValue || ''
    })

    useEffect(() => {
        localStorage.setItem('more_Information', JSON.stringify(moreInformation))
    }, [moreInformation])

    const [isFacebook, setFacebook] = useState(() => {
        const saved = localStorage.getItem('isFacebook');
        const initiolValue = JSON.parse(saved)
        return initiolValue || ''
    })

    useEffect(() => {
        localStorage.setItem('isFacebook', JSON.stringify(isFacebook))
    }, [isFacebook])

    const [isInstagram, setInstagram] = useState(() => {
        const saved = localStorage.getItem('isInstagram');
        const initiolValue = JSON.parse(saved)
        return initiolValue || ''
    })

    useEffect(() => {
        localStorage.setItem('isInstagram', JSON.stringify(isInstagram))
    }, [isInstagram])


    const [isLinkedin, setLinkedin] = useState(() => {
        const saved = localStorage.getItem('isLinkedin');
        const initiolValue = JSON.parse(saved)
        return initiolValue || ''
    })

    useEffect(() => {
        localStorage.setItem('isLinkedin', JSON.stringify(isLinkedin))
    }, [isLinkedin])

    const [isYoutube, setYoutube] = useState(() => {
        const saved = localStorage.getItem('isYoutube');
        const initiolValue = JSON.parse(saved)
        return initiolValue || ''
    })

    useEffect(() => {
        localStorage.setItem('isYoutube', JSON.stringify(isYoutube))
    }, [isYoutube])

    const [isImage, setIsImage] = useState(() => {
        const saved = localStorage.getItem('isImage');
        const initiolValue = JSON.parse(saved)
        return initiolValue || ''
    })

    useEffect(() => {
        localStorage.setItem('isImage', JSON.stringify(isImage))
    }, [isImage])


    const [isImageURL, setIsImageURL] = useState(() => {
        const saved = localStorage.getItem('isImageURL');
        const initiolValue = JSON.parse(saved)
        return initiolValue || ''
    })

    useEffect(() => {
        localStorage.setItem('isImageURL', JSON.stringify(isImageURL))
    }, [isImageURL])


    const [isImageOrPdfURL, setIsImageOrPdfURL] = useState()

    const [file, setFile] = useState([])

    const [isSubject, setIsSubject] = useState('Fənn seçin')
    const [isDirection, setIsDirection] = useState('İstiqamət seçin')







    const fileReader = new FileReader();
    const secondFileReader = new FileReader();
    secondFileReader.onloadend = () => {
        setIsImageOrPdfURL(secondFileReader.result)
    }
    fileReader.onloadend = () => {
        setIsImageURL(fileReader.result);
    }
    secondFileReader.onloadend = () => {
        setIsImageOrPdfURL(secondFileReader.result)
    }


    const handleSelectDistrict = (district) => {
        setDistrict(district)
    }
    const handleSelectSity = (e) => {
        setSity(sity)
    }
    const handleSelectSubway = (subway) => {
        setSubway(subway)
    }
    const handleWriteExactAddress = (e) => {
        setAddress(e.target.value)
    }
    const handleSetTheAddressOnTheMap = (e) => {
        setOnTheMapAddress(e.target.value)
    }
    const handleWritwPhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }

    const handleWriteIsYourEmail = (e) => {
        setIsYourEmail(e.target.value)
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
    const [imagges, setImagges] = useState([])


    const handlerUploadFilePdfOrJpeg = (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        setIsImageOrPdfURL(file)
        // setImagges([...imagges, isImageOrPdfURL])
        secondFileReader.readAsDataURL(file)
    }
    const addItem = (e) => {
        e.preventDefault()
        setImagges([...imagges, isImageOrPdfURL])
    }

    const addNewPerson = (newPerson) => {
        axios.post(`http://localhost:3005/data?`, newPerson)
            .then((response) => {
            })
    }

    const createnewPersonCard = (e) => {
        e.preventDefault();
        const newPerson = {
            language: chooseTeachingLanguages,
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
            instagram: isInstagram,
            city_id: sity,
            region_id: district,
            metro_id: subway,
            userId: firstNameAndLastName,
            profetion: '',
            price: '',
            category: "",
            availableSpace: "true",
            isSubject:isSubject,
            isDirection:isDirection,
            everyPerson: "everyBody",
            group: handleSelaectAsAGroup,
            individual: selectIndividualTeachingFormat,
            haveSpace: haveSpace,
            lessonnsOnlyne: lessonnsOnlyne,
            atTheStudentsAddress: atTheStudentsAddress,
            atTheTeachersAddress: atTheTeachersAddress,
            asAGroupOnlyne: asAGroupOnlyne,
            asAGroupatTheStudentsAddress: asAGroupatTheStudentsAddress,
            asAGroupAtTheTeachersAddress: asAGroupAtTheTeachersAddress,
            chooseTeachingLanguages: chooseTeachingLanguages,
        }

        addNewPerson(newPerson)
    }


    const [user, setUser] = useState({})

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, [])

    const file1 = file.map(file => (
        <li  style={{ display: 'flex', alignItems: 'center', width: "52px", height: "60px" }} key={file.name}>
            <Image  src={file.preview} />
        </li>
    ))

    const value = {
        //dushboard
        chooseTeachingLanguages,
        haveSpace,
        file, setFile,file1,
        isDirection, setIsDirection,
        isSubject, setIsSubject,
        sity, setSity,

        handleAvailableSpaceHere,
        asAGroupOnlyne,
        handleSelaectAsAGroupOnlyne,

        asAGroupatTheStudentsAddress,
        handleSelaectAsAGroupAtTheStudentsAddress,

        setAsAGroupAtTheTeachersAddress,
        asAGroupAtTheTeachersAddress,
        handleSelaectAsAGroupAtTheTeachersAddress,

        handleChooseTeachingLanguages,
        lessonnsOnlyne,
        HandlelessonnsOnlyne,

        atTheStudentsAddress,
        HandleAtTheStudentsAddress,

        atTheTeachersAddress,
        HandleAtTheTeachersAddress,
        handleSelaectAsAGroup,
        HandleSelaectAsAGroup,
        selectIndividualTeachingFormat,
        SelectTeachingFormat,
        addItem,
        isFacebook,
        isInstagram,
        isLinkedin,
        isYoutube,
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
        isLinkedin,
        isYoutube,
        handleWriteLinkedin,
        handleWriteYoutube,
        writeMoreInformation,
        moreInformation,
        onTheMapAddress,
        handleWriteFirstNameAndLastName,
        firstNameAndLastName,
        handleWriteIsYourEmail,
        isYourEmail,
        handleWritwPhoneNumber,
        phoneNumber,
        handleWritwEmail,
        createnewPersonCard,
        handleSelectDistrict,
        handleSelectSity,
        handleSelectSubway,
        handleWriteExactAddress,
        handleSetTheAddressOnTheMap,
        imagges,
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
        addBasket,
        handleSearch,
        options
    }



    return (
        <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>
    )
}