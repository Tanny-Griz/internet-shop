import React from 'react'

const Pagination = ({postPerPage, totalPosts, paginate}) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts/postPerPage); i++ ) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(num => (
                    <li key={num} className="pag-item">
                        <a onClick={() => paginate(num)} className="page-link">
                            {num}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination