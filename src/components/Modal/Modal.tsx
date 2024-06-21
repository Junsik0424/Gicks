import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface ModalProps {
  show: boolean;
  id: string;
  onClose: () => void;
  containerRef: React.RefObject<HTMLDivElement>;
}

const ModalOverlay = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1010;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 500px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
const ChatButton = styled.button`
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
const ChatBtnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export type modalData = {
  title: string;
  content: string;
  remaining: string;
  time: string;
};

const Modal: React.FC<ModalProps> = ({ show, id, onClose, containerRef }) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [show, containerRef, onClose]);

  const [data, setData] = useState<modalData>({
    title: "",
    content: "",
    remaining: "",
    time: "",
  });

  const fetchModalData = async (contentUuid: string) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/contents/${contentUuid}`,
      );
      if (response.status === 200) {
        const fetchedData: modalData = {
          title: response.data.title,
          content: response.data.body,
          remaining: `${response.data.HeadCount}명 남음`,
          time: new Date(response.data.createdAt).toLocaleDateString("ko-KR"),
        };

        setData(fetchedData);
      } else {
        console.log("error occured");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchModalData(id);
  }, [id]);

  return (
    <ModalOverlay show={show} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{data.title}</h2>
        <p>{data.content}</p>
        <p>{data.remaining}</p>
        <p>{data.time}</p>
        <ChatBtnContainer>
          <ChatButton>입장하기</ChatButton>
        </ChatBtnContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
