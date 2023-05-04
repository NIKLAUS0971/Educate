import axios from "axios"
import React from "react"
import { useState, useEffect } from 'react'

export function Category() {
    const [obj, setObj] = useState({})
    const [filterGenre, setFilterGenre] = useState([])
    const [sortValue, setSortValue] = useState('')
    const [search, setSearch] = useState('')

    const sortOption = ['rating', 'price'];


    useEffect(() => {
        const loadUsersData = async () => {
            try {
                const getAllData = await axios.get(`http://localhost:3005/data`)
                const allData = getAllData.data.flatMap((item) => {
                    return item.data
                })
                setObj(allData)

            } catch (err) {
                console.log(err);
            }
        }
        loadUsersData()
    }, [])

    const handleSort = async (e) => {
        let value = e.target.value;
        setSortValue(value)
        return await axios.get(`http://localhost:3005/data?_sort${value}`)
            .then((response => {
                const newResponse = response.data.flatMap(item => item.data)
                setObj(newResponse)
            }))
            .catch(err => console.log(err))
    }

    console.log(obj);

    return (
        <>
            <div>
                <select
                    style={{ width: '50%', height: '35px' }}
                    onChange={handleSort}
                    value={sortValue}>
                    {sortOption.map((item, index) => {
                        <option value={item} key={index}>dcdc</option>
                    })}
                </select>
            </div>
        </>
    )
}