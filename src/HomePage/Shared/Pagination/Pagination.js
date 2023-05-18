import React, { useContext } from 'react'
import '../Style/Style.css';
import { CustomContext } from '../Context/Context';

const Pagination = ({ postPerPage, totalPosts, currentPage, setCurrentPage}) => {
    const{prePage, nextPage} = useContext(CustomContext)
    const npage = Math.ceil(totalPosts / postPerPage)
    const pages = [...Array(npage + 1).keys()].slice(1);
    
    return (
        <div>
            <div className='paginationBtn' style={{ display: 'flex', margin: '36px auto', width: '100%', maxWidth: '343px', gap: '14px' }}>
                <button onClick={prePage}>
                        Prev
                </button>
                {
                    pages.map((page, index) => {
                        return <button className={`${currentPage === page ? 'activePage' : ''}`}
                         style={{cursor: 'pointer', borderRadius: '5px', width: '29px', height: '30px', border: 'none' }}
                            key={index} onClick={() => setCurrentPage(page)}>
                            <div>{page}</div>
                        </button>
                    })
                }
                 <button onClick={nextPage}>
                        Next
                </button>
            </div>
        </div>
    )
   

    // function setCurrentPage(id){

    // }

   
}

export default Pagination