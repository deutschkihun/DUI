import React from 'react'
import styled from 'styled-components';

export interface Props {
    total: number;
    limit: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>
}


const PaginationNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`

const PaginationBtn = styled.button`
  border: none;
  padding: 8px;
  background: blue;
  color: white;

  &:hover {
    background: rgb(91, 97, 254);
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: white;
    border: black;
    color: black;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`

const Pagination = ({ total, limit, page, setPage }:Props) => {
    const numPages = Math.ceil(total / limit)
    return (
      <PaginationNav>
        <PaginationBtn  onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </PaginationBtn>
        {Array(numPages)
          .fill(0)
          .map((_, i) => (
            <PaginationBtn className='pagination-btn' key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? 'page': undefined}>
              {i + 1}
            </PaginationBtn>
          ))}
        <PaginationBtn className='pagination-btn' onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </PaginationBtn>
      </PaginationNav>
    )
  }
  
export default Pagination
  

  