import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../assets/img/glass.svg';
import SearchOptions from './SearchOptions';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 750px;
  position: relative;
  margin-left: 20px;
  svg {
    position: absolute;
    padding-left: 7px;
  }
`;
const SearchBar = styled.input`
  width: 100%;
  height: 25px;
  border-radius: 2px;
  padding: 2px 10px;
  border: 1px solid grey;
  font-size: 12px;
  overflow: auto;
  text-indent: 1rem;
  :focus {
    outline: 1px solid #6bbbf7;
    box-shadow: #d7e5f2 0px 0px 0px 5px;
  }
`;

const Search = () => {
  //   const [focus, setFocus] = useState(false);
  //   const onFocus = () => {
  //     return setFocus(true);
  //   };
  return (
    <SearchContainer>
      <SearchBar placeholder="Search.." type="text" />
      <SearchIcon width="1rem" height="1rem" fill="#BABFC3" />
      {/* {focus ? <SearchOptions /> : null} */}
    </SearchContainer>
  );
};

export default Search;
