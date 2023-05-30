import { ThePriceOfTheLesson } from '../FIlterCategory/ThePriceOfTheLesson';
import { filterData } from '../../../../Shared/BazaData/filterData';
import { Subject } from '../FIlterCategory/Subject';
import { Direction } from '../FIlterCategory/Direction';
import { District } from '../FIlterCategory/District';
import { City } from '../FIlterCategory/City';
import { Subway } from '../FIlterCategory/Subway';
import { TeachingFormat } from '../FIlterCategory/TeachingFormat';
import { TypeOfStudy } from '../FIlterCategory/TypeOfStudy';
import { GenderOfTheTeacher } from '../FIlterCategory/GenderOfTheTeacher';


export const CollapseFilter = () => {

    const maping = filterData.map((item, index) => {

        return(
              <div key={index}>
                    <span >
                        {index === 0 &&(<Subject   data={item.name}/>)}
                    </span>
                    <span >
                        {index === 1 &&(<Direction   data={item.name}/>)}
                    </span>
                    <span >
                        {index === 2 &&(<ThePriceOfTheLesson   data={item.name}/>)}
                    </span>
                    <span >
                        {index === 3 &&(<City   data={item.name}/>)}
                    </span>
                    <span >
                        {index === 4 &&(<District   data={item.name}/>)}
                    </span>
                    <span >
                        {index === 6 &&(<Subway   data={item.name}/>)}
                    </span>
                    <span >
                        {index === 7 &&(<TeachingFormat   data={item.name}/>)}
                    </span>
                    <span >
                        {index === 8 &&(<TypeOfStudy   data={item.name}/>)}
                    </span>
                    <span >
                        {index === 9 &&(
                        <div className='container_for_under_line' style={{borderBottom:'none'}}>
                            <GenderOfTheTeacher   data={item.name}/>
                        </div>
                        )}
                    </span>
              </div>
              
              
              
              
              
              
              
              
        ) 
   
      })

    return (
        <>
            {maping}
                
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
