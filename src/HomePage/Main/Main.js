import axios from 'axios';
import { Categories } from '../Components/Category/Category'
import { BigIcon } from '../Shared/icons/BigIcon'
import { Search } from '../Shared/icons/Search';
import { useEffect, useState } from 'react'

import '../Shared/Style/Style.css'


export function Main() {

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
                const  response = data.filter(val=>val.category == "IT")
                setIt(response)
            })
    }
   
 
    useEffect(() => {
        fetchDataDizayn()
        fetchDataLenguage()
        fetchDataIt()
    }, [])


    return (
        <>
            <div className="wrapper_banner_wrapper">
                <div className="container">
                    <div className="everithing_is_inside">
                        <div className="body">Tələbələrin <a className="repetitors" href="#">repetitorlarla</a> görüşdüyü yer.</div>
                        <div className="search_repetitor_wrapper">
                            <form action="">
                                <div className="search_repetitor_search">
                                    <input className="search_repetitor" type="text" placeholder="Repetitor axtar" />
                                    <button className="btn_for_search_repetitor"><Search /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="wrapper_for_big_icon"><BigIcon /></div>
                </div>
            </div>
            <div className="banner_wrapper">
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