import React from 'react'
import "./styles/Pagination.scss";

export interface Props {
    total: number;
    limit: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const Pagination = ({ total, limit, page, setPage }:Props) => {
    const numPages = Math.ceil(total / limit)
    return (
      <nav className='pagination-nav'>
        <button className='pagination-btn' onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </button>
        {Array(numPages)
          .fill(0)
          .map((_, i) => (
            <button className='pagination-btn' key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? 'page' : undefined}>
              {i + 1}
            </button>
          ))}
        <button className='pagination-btn' onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </button>
      </nav>
    )
  }

export default Pagination
  