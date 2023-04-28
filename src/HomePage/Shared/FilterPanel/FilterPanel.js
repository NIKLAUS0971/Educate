import React from 'react'
import { Subject } from '../../Components/TeachersFilterAll/Filter/FIlterCategory/Subject'



export const FilterPanel=({cuisine, changeChecked})=>{
    return(
        <>
        <div>
            <p>Cuisine</p>
            {
                cuisine.map((cuisine)=>{
                    <Subject 
                    key={cuisine.id}
                    cuisine={cuisine}
                    changeChecked={changeChecked}
                    />
                })
            }
        </div>
        
        </>
    )
}