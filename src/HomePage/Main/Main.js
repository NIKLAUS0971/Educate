import axios from 'axios';
import { Categories } from '../Components/Category/Category'
import { BigIcon } from '../Shared/icons/BigIcon'
import { Search } from '../Shared/icons/Search';
import { useEffect, useState, useContext } from 'react'
import { CustomContext } from '../Shared/Context/Context';


import '../Shared/Style/Style.css'
import { useNavigate } from 'react-router-dom';



export function Main() {
    
    const navigate = useNavigate();
    const {
        search,
        setDataList,
        setSearch,
        handleSearch
    } = useContext(CustomContext)


    const [dizayn, setDizayn] = useState([])
    const [lenguage, setLenguage] = useState([])
    const [it, setIt] = useState([])
    
    const fetchDataDizayn = async () => {
        await axios.get(`http://localhost:3005/data?_limit=3`)
            .then(({ data }) => {
                data = data.filter(item=>item.category)
                const  response = data.filter(val=>val.category == "Dizayn")
                setDizayn(response)
                // setDizayn(it)
            })
    }
    const fetchDataLenguage = async () => {
        await axios.get(`http://localhost:3005/data?_start=9&_limit=3`)
            .then(({ data }) => {
                data = data.filter(item=>item.category)
                const  response = data.filter(val=>val.category == "Dillər")
                setLenguage(response)
            })
    }
    const fetchDataIt = async () => {
        await axios.get(`http://localhost:3005/data?_start=13&_limit=3`)
            .then(({ data }) => {
                data = data.filter(item=>item.category)
                const  response = data.filter(val=>val.category == "İT")
                setIt(response)
            })
    }
  
    useEffect(() => {
        fetchDataDizayn()
        fetchDataLenguage()
        fetchDataIt()
    }, [])


    const handleSubmit = async (e) =>{
        e.preventDefault()
         await axios.get(`http://localhost:3005/data?q=${search}`)
            .then(({ data }) => {
                    setDataList(data)
                    setSearch('')
                    
            })
            navigate(`/teachers/${search}`)
        
    };
    return (
        <>
            <div className="banner_banner_wrapper_wrapper">
                <div className="container">
                    <div className="everithing_is_inside">
                        <div className="body">Tələbələrin <a className="repetitors" href="#">repetitorlarla</a> görüşdüyü yer.</div>
                        <div className="search_repetitor_wrapper">
                            <form action="" onSubmit={handleSubmit}>
                                <div className="search_repetitor_search">
                                    <input value={search} onChange={(e)=> setSearch(e.target.value)} className="search_repetitor" type="text" placeholder="Repetitor axtar" />
                                    <button className="btn_for_search_repetitor" type='submit'><Search /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="wrapper_for_big_icon"><BigIcon /></div>
                </div>
            </div>
            <div className="banner_wrapper_wrapper_banner">
                <div className="container">
                    <div className="everifthing_abot_cart_is_inside">
                        <div className="wrapper_cart">
                            <Categories data={dizayn} lenguage={lenguage} it={it}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}