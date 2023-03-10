import MapIts from '../../Shared/foto/MapIts.png'
import { IconCategory } from '../../Shared/icons/IconCategory'

export function FindeOnTheMap() {
    return (
        <>
            <div className="individual_components">
                <div className="all_items">
                    <div className="wrapper_for_icon_items find_on_map">
                        <div><IconCategory /></div>
                        <div className="items2">Xəritədə tap</div>
                    </div>
                    <div className="wrapper_for_btn_right_arrow">
                        <a href="../our progect/Teachers/teachers.html" className="showe_all">Hamısına bax</a>
                        <svg className="right_arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.1142 10.7593C19.5798 10.3602 19.5798 9.63984 19.1142 9.24074L14.6657 5.42776C14.3785 5.18161 13.9548 5.18161 13.6676 5.42776C13.3106 5.73381 13.3106 6.28619 13.6676 6.59223L16.81 9.28571H0.714285C0.319796 9.28571 0 9.60551 0 10C0 10.3945 0.319797 10.7143 0.714286 10.7143H16.81L13.6676 13.4078C13.3106 13.7138 13.3106 14.2662 13.6676 14.5722C13.9548 14.8184 14.3785 14.8184 14.6657 14.5722L19.1142 10.7593Z" />
                        </svg>
                    </div>
                </div>
                <div className="map">
                    <img className="find_on_the_map" src={MapIts} alt="" />
                </div>
            </div>
        </>
    )
}