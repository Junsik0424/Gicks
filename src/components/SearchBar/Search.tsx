import React, { useState } from "react";
import SearchIcon from "src/assets/search.svg";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px;
  width: 700px;
  height: 30px;
`;

const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 8px;
  font-size: 16px;
  border-radius: 24px;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #60ce72;
  }
`;

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Search query: ", searchQuery);
    // 검색 로직을 추가하세요
  };

  return (
    <StyledContainer>
      <SearchBox>
        <StyledInput
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>
          <SearchIcon />
        </SearchButton>
      </SearchBox>
    </StyledContainer>
  );
};

export default Search;
