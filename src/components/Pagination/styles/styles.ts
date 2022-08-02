import styled from "styled-components"

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`


export const PagninationBtn = styled.button`
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