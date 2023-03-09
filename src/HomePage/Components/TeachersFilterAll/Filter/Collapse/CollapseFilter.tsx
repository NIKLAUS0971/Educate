import React, { useState } from 'react';
import { ThePriceOfTheLesson } from '../FIlterCategory/ThePriceOfTheLesson';
import { Accordion } from './Accordion';
import { filterData } from '../../../../Shared/BazaData/filterData';
import { Subject } from '../FIlterCategory/Subject';
import { Direction } from '../FIlterCategory/Direction';
import { City } from '../FIlterCategory/City';
import { District } from '../FIlterCategory/District';
import { Territory } from '../FIlterCategory/Territory';
import { Subway } from '../FIlterCategory/Subway';
import { TeachingFormat } from '../FIlterCategory/TeachingFormat';
import { TypeOfStudy } from '../FIlterCategory/TypeOfStudy';
import { GenderOfTheTeacher } from '../FIlterCategory/GenderOfTheTeacher';


export const CollapseFilter = ({  setList, selectedPrice, setSelectedPrice, sortRating }: any) => {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <div>
                <div>
                    {
                        filterData.map((item, index) => {
                            if (index === 0) {
                                return (
                                    <>
                                        <div>
                                            <Subject key={index} data={item.name} isOpen={isOpen} />
                                        </div>
                                    </>
                                )
                            }
                            else if (index === 1) {
                                return (
                                    <>
                                        <div>
                                            <Direction key={index} data={item.name} />
                                        </div>
                                    </>
                                )
                            }
                            else if (index === 2) {
                                return (
                                    <>
                                        <div>
                                            <ThePriceOfTheLesson 
                                            setList={setList}
                                             key={index} 
                                             data={item.name} 
                                             setSelectedPrice={setSelectedPrice}
                                             selectedPrice={selectedPrice}
                                             />
                                        </div>
                                    </>
                                )
                            }
                            else if (index === 3) {
                                return (
                                    <>
                                        <div>
                                            <City key={index} data={item.name} />
                                        </div>
                                    </>
                                )
                            }
                            else if (index === 4) {
                                return (
                                    <>
                                        <div>
                                            <District key={index} data={item.name} />
                                        </div>
                                    </>
                                )
                            }
                            else if (index === 5) {
                                return (
                                    <>
                                        <div>
                                            <Territory key={index} data={item.name} />
                                        </div>
                                    </>
                                )
                            }
                            else if (index === 6) {
                                return (
                                    <>
                                        <div>
                                            <Subway key={index} data={item.name} />
                                        </div>
                                    </>
                                )
                            }
                            else if (index === 7) {
                                return (
                                    <>
                                        <div>
                                            <TeachingFormat key={index} data={item.name} />
                                        </div>
                                    </>
                                )
                            }
                            else if (index === 8) {
                                return (
                                    <>
                                        <div>
                                            <TypeOfStudy key={index} data={item.name} />
                                        </div>
                                    </>
                                )
                            }
                            else if (index === 9) {
                                return (
                                    <>
                                        <div>
                                            <GenderOfTheTeacher key={index} data={item.name} />
                                        </div>
                                    </>
                                )
                            }
                            return (
                                <>
                                    <Accordion key={index} data={item.name} />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}