import { useRef, useState } from "react";
import Modal from "src/components/Modal/Modal";
import Drawer from "src/components/NavDrawer/Drawer";
import Search from "src/components/SearchBar/Search";
import Tags from "src/components/Tags/Tags";
import styled from "styled-components";

const Home = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const OpenButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #a5d6a7;
  border: none;
  color: white;
  border-radius: 5px;

  &:hover {
    background-color: #7cb342;
  }
`;

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <Home ref={modalContainerRef}>
      <Drawer />
      <h1>모달 컨테이adfalskdjfals;kfj;asdlkfjas;lkfjasdl;fj너</h1>
      <OpenButton onClick={handleOpenModal}>모달 열기</OpenButton>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        containerRef={modalContainerRef}
      >
        <h1>모달 제목</h1>
        <p>이것은 모달의 내용입니다.</p>
      </Modal>
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
