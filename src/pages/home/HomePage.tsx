import "src/components/styles.css";

import { useRef, useState } from "react";
import Card from "src/components/Card/Card";
import Modal from "src/components/Modal/Modal";
import Drawer from "src/components/NavDrawer/Drawer";
import Search from "src/components/SearchBar/Search";
import Tags from "src/components/Tags/Tags";
import styled from "styled-components";

const Home = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: space-between;
  height: 100vh;
`;

const DrawerContainer = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 20px;
  gap: 14px;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;
  margin-top: 20px;
`;
const LoginContainer = styled.div`
  display: flex;
`;
const LoginButton = styled.button`
  background-color: #60ce72;
  border: none;
  color: white;
  text-align: center;
  display: inline-block;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 8px;
  width: 5rem;
  height: 48px;

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
  {
    title: "Card Title 6",
    content: "Card content goes here.",
    remaining: "6명 남음",
    time: "4일전",
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
  const [modalContent, setModalContent] = useState<string>("");
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = (modalContentId: string) => {
    setShowModal(true);
    setModalContent(modalContentId);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent("");
  };

  return (
    <Home ref={modalContainerRef}>
      <Modal
        show={showModal}
        id={modalContent}
        onClose={handleCloseModal}
        containerRef={modalContainerRef}
      >
        <p>{modalContent}</p>
      </Modal>
      <DrawerContainer>
        <Drawer />
      </DrawerContainer>
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
              <Card
                key={index}
                title={card.title}
                content={card.content}
                remaining={card.remaining}
                time={card.time}
                onClick={() => handleOpenModal(card.content)}
              />
            ))}
          </CardsContainer>
        </BottomContainer>
      </RightContainer>
    </Home>
  );
};

export default HomePage;
