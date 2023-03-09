import { IData2 } from "../../../Modul/Modul"


// interface ProductProps {
//     data: IData2
// }


export function AllCard({data}:any) {
    
    return (
        <>
            <div className="carts cart1">
                <div className="information_about_teacher">
                    <div className="foto_information_and_icon_teacher">
                        <a href="../our progect/Teachers card/Teachers card.html" className="foto_information_teacher">
                            <div className="foto_teacher">

                            </div>
                            <div className="information_teacher">
                                <p className="text_name">{data.title}</p>
                                <p className="about_teacher_job">{data.profetion}</p>
                            </div>
                        </a>
                        <svg className="icon_for_cart" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.66999 20.8766C5.55703 20.9521 5.42567 20.9956 5.28993 21.0023C5.15419 21.0089 5.01919 20.9786 4.89934 20.9146C4.7795 20.8505 4.67932 20.755 4.60951 20.6384C4.5397 20.5218 4.50288 20.3885 4.50299 20.2526V6.01455C4.50299 5.21994 4.81824 4.45779 5.37955 3.89535C5.94086 3.33291 6.70238 3.01614 7.49699 3.01455L16.497 2.99805C16.891 2.99726 17.2812 3.07408 17.6455 3.22412C18.0098 3.37415 18.3409 3.59447 18.6201 3.87249C18.8992 4.15051 19.1208 4.48078 19.2723 4.84446C19.4238 5.20813 19.5022 5.59809 19.503 5.99205V20.2511C19.5031 20.387 19.4663 20.5203 19.3965 20.6369C19.3267 20.7535 19.2265 20.849 19.1066 20.9131C18.9868 20.9771 18.8518 21.0075 18.7161 21.0008C18.5803 20.9941 18.4489 20.9506 18.336 20.8751L12.003 16.6451L5.66999 20.8751V20.8766ZM18.003 5.99955L17.9925 5.82255C17.9491 5.45743 17.7731 5.12097 17.498 4.87707C17.2228 4.63317 16.8677 4.49882 16.5 4.49955L7.49999 4.51455C7.10269 4.51535 6.72193 4.67373 6.44127 4.95495C6.16061 5.23617 6.00299 5.61725 6.00299 6.01455V18.8501L11.586 15.1211C11.7094 15.0385 11.8545 14.9944 12.003 14.9944C12.1515 14.9944 12.2966 15.0385 12.42 15.1211L18.003 18.8501V5.99955Z" />
                        </svg>
                    </div>
                    <div className="wrapper_rating">
                        <div className="rating">
                            <p className="rating_number">{data.rating}</p>

                        </div>
                    </div>
                    <a href="../our progect/Teachers card/Teachers card.html" className="wrapper_about_price_location_and_litle_about_teacher">
                        <div className="litle_about_teacher">{data.description}</div>
                    </a>
                    <div className="wrapper_about_price">
                        <div className="about_price">
                            <div className="price several">

                                <p className="month_price">Aylıq ödəniş:</p>
                            </div>
                            <p className="payment">{data.price} Azn</p>
                        </div>
                    </div>
                    <div className="wrapper_location several">

                        <p className="month_price">{data.location}</p>
                    </div>
                </div>
            </div>
        </>
    )
}