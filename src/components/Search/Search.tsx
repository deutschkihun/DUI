import React, { useRef, useEffect } from "react";
import styled from "styled-components";


export const SearchMachine = styled.section`
  position: relative;
  max-width: 70vw;
  padding: 20px 40px;
  margin: 50px auto;
`;

export const SearchForm = styled.form`
  max-width: 60vw;
  margin: 0 auto;
  background: #fff;
  padding: 1.5rem 2.5rem;
  text-transform: capitalize;
  border-radius: 0.25rem;
  box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
`;

export const FormControl = styled.input`
  width: 100%;
  border: none;
  border-color: transparent;
  background: #f1f5f8;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1.2rem;
`;

const KeywordForm = styled.div`
  margin: 20px 0;

  span {
    display: inline-block;
    margin-right: 6px;
    margin-bottom: 0.5rem;

    a {
      padding: 10px;
      display: block;
      border-radius: 8px;
      font-size: 14px !important;
      line-height: 1;
      color: #fff;
      background-color: #313336;
      text-decoration: none;
    }
  }
`;

const Search = (): JSX.Element => {
  const searchValue = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchValue && searchValue.current?.focus();
  }, []);

  const Submithandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <SearchMachine>
      <SearchForm  onSubmit={Submithandler}>
        <FormControl
          type="text"
          id="name"
          ref={searchValue}
        />
        <KeywordForm>
          <span>
            <a href="/">front-end</a>
          </span>
        </KeywordForm>
      </SearchForm>
    </SearchMachine>
  );
};

export default Search