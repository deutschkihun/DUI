import React from 'react'
import { Nav, PagninationBtn } from './styles/styles';


export interface Props {
    total: number;
    limit: number;
    page: number;
}

const Pagination = ({ total, limit, page }:Props) => {
    const numPages = Math.ceil(total / limit)
    return (
      <Nav>
        <PagninationBtn  disabled={page === 1}>
          &lt;
        </PagninationBtn>
        {Array(numPages)
          .fill(0)
          .map((_, i) => (
            <PagninationBtn key={i + 1}  aria-current={page === i + 1 ? 'page' : false}>
              {i + 1}
            </PagninationBtn>
          ))}
        <PagninationBtn disabled={page === numPages}>
          &gt;
        </PagninationBtn>
      </Nav>
    )
  }

export default Pagination
  