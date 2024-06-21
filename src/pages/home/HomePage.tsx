import "src/components/styles.css";

import { useRef, useState } from "react";
import Card from "src/components/Card/Card";
import Modal from "src/components/Modal/Modal";
import Drawer from "src/components/NavDrawer/Drawer";
import Search from "src/components/SearchBar/Search";
import Tags from "src/components/Tags/Tags";
import styled from "styled-components";

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

const Home = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  height: 100vh;
`;
const RightContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  margin-left: 30px;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const LoginContainer = styled.div`
  display: flex;
  margin-top: 3%;
`;
const LoginButton = styled.button`
  background-color: #60ce72;
  border: none;
  color: white;
  text-align: center;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  border-radius: 6px;
  width: 100px;
  height: 50px;

  &:hover {
    background-color: #45a049;
  }
`;
const BottomContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
const cardsData = [
  {
    title: "최익준",
    content: "선형대수학(김재길 교수님) 스터디 인원 모집합니다",
    remaining: "3명 남음",
    time: "1일전",
  },
  {
    title: "엄현식",
    content:
      "제목이 긴 게시물의 경우 두줄까지만 표시하고 이렇게 남는 부분은 잘라서 표...",
    remaining: "1명 남음",
    time: "1일전",
  },
  {
    title: "서강현",
    content: "짧아도 최소 높이 존재",
    remaining: "6명 남음",
    time: "1일전",
  },
  {
    title: "Card Title 4",
    content: "Card content goes here.",
    remaining: "4명 남음",
    time: "2일전",
  },
  {
    title: "Card Title 5",
    content: "Card content goes here.",
    remaining: "5명 남음",
    time: "3일전",
  },
  {
    title: "Card Title 6",
    content: "Card content goes here.",
    remaining: "6명 남음",
    time: "4일전",
  },
];

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <Home ref={modalContainerRef}>
      <Drawer />
      {/* <h1>모달 컨테이adfalskdjfals;kfj;asdlkfjas;lkfjasdl;fj너</h1>
      <OpenButton onClick={handleOpenModal}>모달 열기</OpenButton>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        containerRef={modalContainerRef}
      >
        <h1>모달 제목</h1>
        <p>이것은 모달의 내용입니다.</p>
      </Modal> */}
      {/* 이거 주석처리 안하면 이상해짐 원래 card 클릭했을 때 실행하게끔 해야하는데 어케하는지 모르겠음 */}

      <RightContainer>
        <TopContainer>
          <Search />
          <LoginContainer>
            <LoginButton>로그인</LoginButton>
          </LoginContainer>
        </TopContainer>
        <Tags />
        <BottomContainer>
          <CardsContainer>
            {cardsData.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </CardsContainer>
        </BottomContainer>
      </RightContainer>
    </Home>
  );
};

export default HomePage;
