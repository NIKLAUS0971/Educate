



import { Categories } from '../Components/Category/Category'
import { data } from '../Shared/BazaData/BazaData'
import { BigIcon } from '../Shared/icons/BigIcon'
import Slider from "react-slick";
import { Search } from '../Shared/icons/Search';
import { FindeOnTheMap } from '../Components/FindeOnTheMap/FindeOnTheMap';
import { ShowSlider } from '../Components/Slider/ShowSlider';

import '../Shared/Style/Style.css'

export function Main() {
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
                            <Categories data={data[0]} />
                            <Categories data={data[1]} />
                            <ShowSlider/>
                            <FindeOnTheMap />
                            <Categories data={data[2]} />
                            <Categories data={data[3]} />
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}