import { filterData } from "../../../../Shared/BazaData/filterData"
import { Subject } from "../FIlterCategory/Subject"


export const Accordion = ({open, data, key }: any) => {
    
    return (
        <>
            <div className="accordion_container">
                <ExpendableColumn data={data} open={open} />
            </div>
        </>
    )
}

export const ExpendableColumn = ({ data, open }: any) => {
    return (
        <>
            <button className="colum_conatiner">{data}</button>
        </>
    )
}

