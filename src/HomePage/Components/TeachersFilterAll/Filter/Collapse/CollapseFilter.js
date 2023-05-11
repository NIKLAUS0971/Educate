import { ThePriceOfTheLesson } from '../FIlterCategory/ThePriceOfTheLesson';
import { filterData } from '../../../../Shared/BazaData/filterData';
import { Subject } from '../FIlterCategory/Subject';
import { Direction } from '../FIlterCategory/Direction';
import { District } from '../FIlterCategory/District';
import { City } from '../FIlterCategory/City';
import { Territory } from '../FIlterCategory/Territory';
import { Subway } from '../FIlterCategory/Subway';
import { TeachingFormat } from '../FIlterCategory/TeachingFormat';
import { TypeOfStudy } from '../FIlterCategory/TypeOfStudy';
import { GenderOfTheTeacher } from '../FIlterCategory/GenderOfTheTeacher';


export const CollapseFilter = ({handleChooseSubject, value1}) => {
    
    const data = filterData.map((item, index) => {

        if(index === 0){
            return(
                <>
                    <Subject value1={value1} handleChooseSubject={handleChooseSubject} data={item.name}/>
                </>
            )
        } else if(index === 1){
            return(
                <>
                <Direction data={item.name}/>
                </>
            )
        }else if(index === 2){
            return(
                <>
                <ThePriceOfTheLesson data={item.name}/>
                </>
            )
        }else if(index === 3){
            return(
                <>
                <City data={item.name}/>
                </>
            )
        }else if(index === 4){
            return(
                <>
                <District data={item.name}/>
                </>
            )
        }else if(index === 5){
            return(
                <>
                <Territory data={item.name}/>
                </>
            )
        }else if(index === 6){
            return(
                <>
                <Subway data={item.name}/>
                </>
            )
        }else if(index === 7){
            return(
                <>
                <TeachingFormat data={item.name}/>
                </>
            )
        }else if(index === 8){
            return(
                <>
                <TypeOfStudy data={item.name}/>
                </>
            )
        }else if(index === 9){
            return(
                <>
                    <div key={item.id}>
                        <GenderOfTheTeacher data={item.name}/>
                    </div>
                </>
            )
        }
    })
    return (
        <>
            <div>
                <div>
                    {data}
                </div>
            </div>
        </>
    )
    }


  













// import React, { useState } from 'react';
// import { Accordion } from './Accordion';
// import { filterData } from '../../../../Shared/BazaData/filterData'
// import { ThePriceOfTheLesson } from '../FIlterCategory/ThePriceOfTheLesson';



// export const CollapseFilter = ({ list, search, setSearch, setList, selectedPrice, setSelectedPrice, sortRating }) => {



//     const data = filterData.name.map((item, index) => {
//         if(index === 2){
//             return(
//                 <>
//                 <ThePriceOfTheLesson />
//                 </>
//             )
//         } 
     
//         return (
//             <>
//                 <div className='accordion_container1'>
//                     <Accordion item={item.name} icon={item.icon} />
//                 </div>

//             </>
//         )

//     })

//     return (
//         <>
//             <div>
//                 <div>
//                     {data}
//                 </div>
//             </div>
//         </>
//     )
// }
