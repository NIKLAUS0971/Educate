import React from 'react'

const Pagination = ({ postPerPage, totalPosts, setCurrentPage }) => {
    const pages = [];

    
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className='paginationBtn' style={{ display: 'flex', margin: '36px auto', width: '100%', maxWidth: '343px', gap: '14px' }}>
                {
                    pages.map((page, index) => {
                        return <button style={{ background: '#F6F9FC', cursor: 'pointer', borderRadius: '5px', width: '29px', height: '30px', border: 'none' }}

                            key={index} onClick={() => setCurrentPage(page)}>
                                <div>{page}</div>
                            </button>
                    })
                }
            </div>
        </div>
    )
}

export default Pagination