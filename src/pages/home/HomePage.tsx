import "src/components/styles.css";

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Card from "src/components/Card/Card";
import LoadingOverlay from "src/components/Loading/LoadingOverlay";
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

export type cardType = {
  uuid: string;
  title: string;
  content: string;
  remaining: string;
  time: string;
};

export type contentType = {
  uuid: string;
  title: string;
  body: string;
  createdAt: Date;
  deletedAt?: Date;
  Deadline: Date;
  HeadCount: number;
  authorId: string;
  author: {
    name: string;
    studentId: string;
  };
  Comment: string[];
};

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<string>("");
  const modalContainerRef = useRef<HTMLDivElement>(null);

  const [content, setContent] = useState<cardType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleOpenModal = (modalContentId: string) => {
    setShowModal(true);
    setModalContent(modalContentId);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent("");
  };

  const fetchContent = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/contents`,
      );
      if (response.status === 200) {
        const fetchedContent: contentType[] = response.data;
        console.log(response.data);
        // 데이터를 예시 데이터 형식으로 변환
        const transformedData = fetchedContent.map((item) => ({
          uuid: item.uuid,
          title: item.author.name,
          content: item.body,
          remaining: `${item.HeadCount}명 남음`,
          time: new Date(item.createdAt).toLocaleDateString("ko-KR"),
        }));

        setContent(transformedData);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <Home ref={modalContainerRef}>
      <LoadingOverlay loading={loading} />
      <Modal
        show={showModal}
        id={modalContent}
        onClose={handleCloseModal}
        containerRef={modalContainerRef}
      />
      <DrawerContainer>
        <Drawer />
      </DrawerContainer>
      <RightContainer>
        <TopContainer>
          <Search />
          <LoginContainer>
            <a href="/login">
              <LoginButton>로그인</LoginButton>
            </a>
          </LoginContainer>
        </TopContainer>
        <Tags />
        <BottomContainer>
          <CardsContainer>
            {content.map((data, index) => (
              <Card
                uuid={data.uuid}
                key={index}
                title={data.title}
                content={data.content}
                body={data.content}
                remaining={data.remaining}
                time={data.time}
                onClick={() => handleOpenModal(data.uuid)}
              />
            ))}
          </CardsContainer>
        </BottomContainer>
      </RightContainer>
    </Home>
  );
};

export default HomePage;
