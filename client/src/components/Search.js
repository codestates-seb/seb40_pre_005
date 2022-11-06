import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

const Search = () => {
  const [search, setSearch] = useState();
  const navigate = useNavigate();
  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const onSearch = (e) => {
    e.preventDefault();

    if (e.key === 'Enter') {
      navigate(`/search?q=${search}`);
    }
  };
  return (
    <SearchContainer>
      <SearchBar
        placeholder="Search.."
        type="text"
        onChange={onChangeSearch}
        onKeyUp={onSearch}
      />
      <SearchIcon width="1rem" height="1rem" fill="#BABFC3" />
    </SearchContainer>
  );
};

export default Search;
