import { ShowSlider } from "../Slider/ShowSlider";
import { FindeOnTheMap } from "../FindeOnTheMap/FindeOnTheMap";
import { Category1 } from "./Category1";
import { Category2 } from "./Category2";
import { Category3 } from "./Category3";


import '../../Shared/Style/Style.css'


export function Categories({ data, lenguage, it }) {

    return (
        <>
            <Category1 data={data} />
            <Category2 lenguage={lenguage} />
            <ShowSlider />
            <FindeOnTheMap />
            <Category3 it={it} />
        </>

    )
}






