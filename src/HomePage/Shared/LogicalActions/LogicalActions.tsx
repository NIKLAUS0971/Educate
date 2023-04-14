import { useEffect, useState } from "react";
import * as React from 'react';
import axios from 'axios'


export function useLogicalAtions(){
    const [dataList, setDataList] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")
    const [list, setList] = useState(dataList);
    const [sortRating, setSortRating] = useState(false)
    const [selectedPrice, setSelectedPrice] = React.useState<number[]>([100, 500]);



    async function fetchData() {
        try {
            setLoading(true)
            const response = await axios.get('http://localhost:3005/data')
            const newResponse = response.data.flatMap((item: any) => {
                return item.data
            })
            setDataList(newResponse);
            setList(newResponse);
            setLoading(false)
        } catch (e: unknown) {
            setLoading(true)
            alert('error')
            setLoading(false)
        }
    }

    const applyFilters = () => {
        let updateList = dataList

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
            updateList = updateList.sort((a: any, b: any) => b.rating - a.rating)
        }

        setList(updateList)
    }


    useEffect(() => {
        applyFilters()
    }, [selectedPrice, search, sortRating])

    useEffect(() => {
        fetchData()
    }, [])

    return{loading, list, sortRating, selectedPrice, search, dataList, setSearch, setSortRating, setSelectedPrice, setList}
}