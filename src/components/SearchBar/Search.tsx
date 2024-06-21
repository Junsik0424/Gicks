// import React from "react";
// import styled from "styled-components";

// const SearchContainer = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const InputSearch = styled.input`
//   color: #d0d0d0;
//   width: 700px;
//   height: 30px;
//   border-radius: 6px;
//   background-image: url(src\assets\search.svg);
// `;

// const SearchButton = styled.button`
//   background-color: white;
//   border-color: white;
// `;

// const ImgButton = styled.img``;

// const Search: React.FC = () => {
//   return (
//     <SearchContainer>
//       <InputSearch type="text" placeholder="검색어를 입력하세요"></InputSearch>
//       <SearchButton type="button">
//         <ImgButton src="src\assets\search.svg" alt="버튼" />
//       </SearchButton>
//     </SearchContainer>
//   );
// };

// export default Search;

import React, { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-bottom: 57%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px 16px;
  width: 700px;
  height: 30px;
  margin-left: 200px;
  margin-top: 20px;
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
          <img src="src\assets\search.svg" />
        </SearchButton>
      </SearchBox>
    </StyledContainer>
  );
};

export default Search;
