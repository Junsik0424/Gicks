import Drawer from "src/components/NavDrawer/Drawer";
import Search from "src/components/SearchBar/Search";
import Tags from "src/components/Tags/Tags";
import styled from "styled-components";

const Home = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginButton = styled.button`
  background-color: #60ce72;
  border: none;
  color: white;
  text-align: center;
  font-size: 15px;
  border-radius: 6px;
  width: 70px;
  height: 40px;

  &:hover {
    background-color: #45a049;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HomePage = () => {
  return (
    <Home>
      <Drawer />
      <SearchContainer>
        <Search />
        <a href="http://localhost:3000/login">
          <LoginButton>로그인</LoginButton>
        </a>
        <Tags />
      </SearchContainer>
    </Home>
  );
};

export default HomePage;

//버튼 styled component로 넣기
