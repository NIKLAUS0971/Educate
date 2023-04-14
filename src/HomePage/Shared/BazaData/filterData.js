import { CityFilter } from "../icons/CityFilter";
import { DirectionFilter } from "../icons/DirectionFilter";
import { DistrictFilter } from "../icons/DistrictFilter";
import { GenderOfTheTeacherFilter } from "../icons/GenderOfTheTeacherFilter";
import { SubjectFilter } from "../icons/SubjectFilter";
import { SubwayFilter } from "../icons/SubwayFilter";
import { TeachingFormatFilter } from "../icons/TeachingFormatFilter";
import { TerritoryFilter } from "../icons/TerritoryFilter";
import { TypeOfStudyFilter } from "../icons/TypeOfStudyFilter";
import Group from "../icons/Group.svg";



export const filterData = {
    name: [
        { id: 1,  name: 'Fənn', icon:[SubjectFilter]},
        { id: 2, name: 'İstiqamət', icon:  [DirectionFilter] },
        { id: 4, name: 'Şəhər'},
        { id: 5, name: 'Rayon'},
        { id: 6, name: 'Ərazi'},
        { id: 7, name: 'Metro' },
        { id: 8, name: 'Tədris formatı' },
        { id: 9, name: 'Tədris növü'},
        { id: 10, name: 'Müəllimin cinsi'},
       
    ],
    ic: [
        SubjectFilter,
        DirectionFilter,
        CityFilter,
        DistrictFilter,
        TerritoryFilter,
        SubwayFilter,
        TeachingFormatFilter,
        TypeOfStudyFilter,
        GenderOfTheTeacherFilter
    ]
    
}



export const icons = [
    SubjectFilter,
    DirectionFilter,
    CityFilter,
    DistrictFilter,
    TerritoryFilter,
    SubwayFilter,
    TeachingFormatFilter,
    TypeOfStudyFilter,
    GenderOfTheTeacherFilter
]