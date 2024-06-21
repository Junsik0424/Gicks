import React, { ReactNode, useEffect } from "react";
import styled from "styled-components";

interface ModalProps {
  show: boolean;
  id: string;
  onClose: () => void;
  children: ReactNode;
  containerRef: React.RefObject<HTMLDivElement>;
  title: string;
  content: string;
  remaining: number;
  time: string;
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

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  children,
  containerRef,
  title,
  content,
  remaining,
  time,
}) => {
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

  return (
    <ModalOverlay show={show} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{title}</h2>
        <p>내용: {content}</p>
        <p>남은 인원수: {remaining}</p>
        <p>시간: {time}</p>
        <ChatBtnContainer>
          <ChatButton>입장하기</ChatButton>
        </ChatBtnContainer>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
