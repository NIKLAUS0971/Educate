import { ThePriceOfTheLesson } from '../FIlterCategory/ThePriceOfTheLesson';
import { Accordion } from './Accordion';
import { filterData, icons } from '../../../../Shared/BazaData/filterData';



export const CollapseFilter = ({ list, search, setSearch, setList, selectedPrice, setSelectedPrice, sortRating }) => {


    const data = filterData.name.map((item, index) => {

        const Icon = filterData.ic[index]

        return (
            <>
                <div className='accordion' >
                     <Accordion  Icon={<Icon />} data={item.name} />
                </div>
            </>
        )
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


    // export function useYourState(){
    //     const Icon = filterData.ic[index]
    //     return{Icon}
    // }













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
